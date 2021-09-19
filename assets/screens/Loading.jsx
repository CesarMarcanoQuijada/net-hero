export default function Loading() {
    return (
        <div className="bg-gray-900 h-screen flex justify-center items-center">
            <div className="p-2 max-w-sm mx-auto rounded-xl bg-gray-800 shadow-lg">
                <div className="p-6 flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <img className="h-12 w-12 rounded-full" src="/logo.svg" alt="Net Hero Logo" />
                </div>
                <div className="flex justify-center items-center flex-col h-full">
                    <div className="text-xl font-medium text-white">Net Hero</div>
                    
                </div>
                </div>
                <div className="relative pt-1 w-full h-5">
                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                            <div className="shadow-none rounded flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 progress"></div>
                        </div>
                    </div>
            </div>
        </div>
    )
}
