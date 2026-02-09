# Create directory
New-Item -ItemType Directory -Force -Path "public/img/slideshow"

# Copy 31_files images
Copy-Item "31_files/image-029.png" "public/img/slideshow/slide_group.png"
Copy-Item "31_files/image-030.png" "public/img/slideshow/slide_award1.png"
Copy-Item "31_files/image-031.png" "public/img/slideshow/slide_audience.png"
Copy-Item "31_files/image-032.png" "public/img/slideshow/slide_speaker_woman.png"
Copy-Item "31_files/image-034.jpg" "public/img/slideshow/slide_award2.jpg"
Copy-Item "31_files/image-036.png" "public/img/slideshow/slide_couch.png"
Copy-Item "31_files/image-037.png" "public/img/slideshow/slide_chart.png"

# Copy MIT Bangalore images
Copy-Item "public/img/mitb.jpg" "public/img/slideshow/mitb_campus1.jpg"
Copy-Item "public/img/mitb-2.webp" "public/img/slideshow/mitb_campus2.webp"

# Download NTHU images
$url1 = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/National_Tsing_Hua_University_Main_Gate.jpg/1200px-National_Tsing_Hua_University_Main_Gate.jpg"
$dest1 = "public/img/slideshow/nthu_gate.jpg"
Invoke-WebRequest -Uri $url1 -OutFile $dest1

$url2 = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/NTHU_Learning_Resource_Center.JPG/1200px-NTHU_Learning_Resource_Center.JPG"
$dest2 = "public/img/slideshow/nthu_center.jpg"
Invoke-WebRequest -Uri $url2 -OutFile $dest2
