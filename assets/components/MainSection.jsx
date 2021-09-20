import TypewriterComponent from "typewriter-effect";

export function MainSection() {
    return  (
        <div className="bg-gray-900 h-screen flex items-center">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex items-center lg:justify-between">
          <img src="/logo.svg" className="w-20 h-20 mr-3 rounded-full" />
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block text-white">
              <TypewriterComponent options={{
                autoStart: true,
                loop: true,
                delay: 30,
                cursor: "_",
                strings: ["Are you ready to code?", "Are you ready to learn?"]
              }} />
            </span>
            <span className="block text-indigo-500">
            <TypewriterComponent options={{
                autoStart: true,
                cursor: "_",
                strings: "Net Hero."
              }} />
            </span>
          </h2>
        </div>
      </div>

    )
}