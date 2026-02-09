import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

const Popup = () => {
    const [isVisible, setIsVisible] = useState(true)

    if (!isVisible) return null

    return (
        <div className="fixed bottom-4 right-4 z-50 animate-fade-in-up">
            <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-4 flex items-start gap-3 max-w-sm">
                <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Ryan is sold</h3>
                    <p className="text-xs text-gray-500 mt-1 font-mono">
                        Commit: {__COMMIT_HASH__}
                    </p>
                </div>
                <button
                    onClick={() => setIsVisible(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <X size={16} />
                </button>
            </div>
        </div>
    )
}

export default Popup
