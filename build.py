import os
import shutil
import re
import sys

DIST_DIR = 'dist'
SRC_DIRS = ['css', 'js', 'assets']
HTML_FILES = [f for f in os.listdir('.') if f.endswith('.html')]

def clean_dist():
    if os.path.exists(DIST_DIR):
        shutil.rmtree(DIST_DIR)
    os.makedirs(DIST_DIR)

def minify_html(content):
    # Remove comments
    content = re.sub(r'<!--(?!\[if).*?-->', '', content, flags=re.DOTALL)
    # Remove whitespace between tags
    content = re.sub(r'>\s+<', '><', content)
    # Remove leading/trailing whitespace
    content = re.sub(r'^\s+', '', content, flags=re.MULTILINE)
    content = re.sub(r'\s+$', '', content, flags=re.MULTILINE)
    return content

def minify_css(content):
    # Remove comments
    content = re.sub(r'/\*.*?\*/', '', content, flags=re.DOTALL)
    # Remove whitespace
    content = re.sub(r'\s*([:;{}])\s*', r'\1', content)
    content = re.sub(r';}', '}', content)
    return content

def minify_js(content):
    # Very basic minification: remove comments and leading/trailing whitespace
    # Real JS minification is hard with regex, so we'll be conservative
    content = re.sub(r'//.*', '', content)
    content = re.sub(r'/\*.*?\*/', '', content, flags=re.DOTALL)
    lines = [line.strip() for line in content.split('\n') if line.strip()]
    return '\n'.join(lines)

def process_files():
    # Process HTML
    for html_file in HTML_FILES:
        print(f"Processing {html_file}...")
        with open(html_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        minified = minify_html(content)
        
        with open(os.path.join(DIST_DIR, html_file), 'w', encoding='utf-8') as f:
            f.write(minified)

    # Process CSS
    os.makedirs(os.path.join(DIST_DIR, 'css'), exist_ok=True)
    for root, _, files in os.walk('css'):
        for file in files:
            if file.endswith('.css'):
                print(f"Processing css/{file}...")
                with open(os.path.join(root, file), 'r', encoding='utf-8') as f:
                    content = f.read()
                minified = minify_css(content)
                with open(os.path.join(DIST_DIR, 'css', file), 'w', encoding='utf-8') as f:
                    f.write(minified)

    # Process JS
    os.makedirs(os.path.join(DIST_DIR, 'js'), exist_ok=True)
    for root, _, files in os.walk('js'):
        for file in files:
            if file.endswith('.js'):
                print(f"Processing js/{file}...")
                with open(os.path.join(root, file), 'r', encoding='utf-8') as f:
                    content = f.read()
                minified = minify_js(content)
                with open(os.path.join(DIST_DIR, 'js', file), 'w', encoding='utf-8') as f:
                    f.write(minified)

    # Copy Assets
    print("Copying assets...")
    if os.path.exists('assets'):
        shutil.copytree('assets', os.path.join(DIST_DIR, 'assets'))

def main():
    print("Starting build process...")
    clean_dist()
    process_files()
    print("Build complete! Output in 'dist/' directory.")

if __name__ == '__main__':
    main()
