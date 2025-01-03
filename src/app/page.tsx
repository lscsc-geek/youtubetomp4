import Image from "next/image";

export default function Home() {
  const tools = [
    {
      name: "MediaMister",
      url: "https://www.mediamister.com/free-youtube-video-downloader",
      description: "A professional YouTube downloader with support for multiple formats and quality options. Features an easy-to-use interface and fast download speeds.",
      features: ["Multiple formats support", "High-speed downloads", "No registration required", "HD quality support"],
      image: "/img/mediamister.jpg"
    },
    {
      name: "YT1D",
      url: "https://yt1d.com/en16/",
      description: "Simple and efficient YouTube downloader that allows quick downloads without complicated steps. Perfect for casual users.",
      features: ["Easy to use", "Fast conversion", "MP3 extraction", "Browser-based"],
      image: "/img/yt1d.jpg"
    },
    {
      name: "Y2Meta",
      url: "https://y2meta.tube/youtube-to-mp4/",
      description: "Versatile YouTube to MP4 converter with advanced features and high-quality output options. Supports multiple resolutions.",
      features: ["MP4 conversion", "Multiple resolutions", "Fast processing", "Free to use"],
      image: "/img/ytmate.jpg"
    }
  ];

  return (
    <div className="min-h-screen p-6 sm:p-10">
      {/* Hero Section */}
      <header className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          How to Convert YouTube Video to MP4
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Learn how to convert and download YouTube videos to MP4 format with our recommended free tools. Fast, safe and easy to use.
        </p>
      </header>

      {/* Tools Section */}
      <main className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Best Tools to Convert YouTube to MP4
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <div key={tool.name} className="tool-card">
              <div className="h-48 relative mb-4 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                <Image
                  src={tool.image}
                  alt={`${tool.name} interface screenshot`}
                  fill
                  className="object-cover object-top hover:object-bottom transition-all duration-3000 ease-in-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{tool.name}</h3>
              
              <div className="mb-4">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {tool.description}
                </p>
                <ul className="space-y-2">
                  {tool.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block w-full text-center"
              >
                Visit Website
              </a>
            </div>
          ))}
        </div>
      </main>

      {/* Info Section */}
      <section className="max-w-4xl mx-auto mt-20">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Our YouTube to MP4 Tools?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3">High Quality MP4</h3>
            <p className="text-gray-600 dark:text-gray-300">Download YouTube videos in HD MP4 format with excellent quality and fast conversion speed.</p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3">Easy to Convert</h3>
            <p className="text-gray-600 dark:text-gray-300">Simple process to convert YouTube to MP4 - just paste the URL and choose your preferred quality.</p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3">100% Safe & Free</h3>
            <p className="text-gray-600 dark:text-gray-300">All YouTube to MP4 converter tools are free to use and completely safe for your device.</p>
          </div>
        </div>
      </section>

      {/* Additional SEO Content */}
      <section className="max-w-4xl mx-auto mt-20 px-4">
        <h2 className="text-2xl font-bold mb-6">How to Convert YouTube to MP4</h2>
        <div className="prose dark:prose-invert max-w-none">
          <ol className="space-y-4">
            <li>
              <strong>Copy YouTube URL</strong> - Copy the video URL from YouTube that you want to convert to MP4
            </li>
            <li>
              <strong>Choose Converter</strong> - Select one of our recommended YouTube to MP4 converter tools
            </li>
            <li>
              <strong>Paste & Convert</strong> - Paste the URL into the converter and select your preferred MP4 quality
            </li>
            <li>
              <strong>Download MP4</strong> - Click the download button to save your YouTube video in MP4 format
            </li>
          </ol>
        </div>
      </section>

      {/* 在 Additional SEO Content 部分后添加新的内容说明部分 */}
      <section className="max-w-4xl mx-auto mt-20 px-4">
        <h2 className="text-2xl font-bold mb-8">Understanding YouTube to MP4 Conversion</h2>
        
        {/* 基础概念解释 */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4">What is YouTube to MP4 Conversion?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            YouTube to MP4 conversion is the process of downloading and saving YouTube videos in MP4 format on your device. MP4 is a widely-used video format that works on almost all devices, including phones, computers, and tablets.
          </p>
        </div>

        {/* 为什么需要转换 */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Why Convert YouTube Videos to MP4?</h3>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li>• Watch videos offline without internet connection</li>
            <li>• Save educational content for later reference</li>
            <li>• Create backups of your own YouTube content</li>
            <li>• Use videos in presentations or projects</li>
            <li>• Save mobile data by watching downloaded videos</li>
          </ul>
        </div>

        {/* 常见问题解答 */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6">Frequently Asked Questions</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">How to convert YouTube videos to MP4?</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Converting YouTube videos to MP4 is a simple process:
                1. Copy the YouTube video URL
                2. Choose one of our recommended converter tools
                3. Paste the URL into the converter
                4. Select MP4 format and your preferred quality
                5. Click the download button
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Can I upload MP4 files to YouTube?</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, YouTube fully supports MP4 uploads. In fact, MP4 is one of the recommended formats for uploading to YouTube because of its good quality and reasonable file size. To upload:
                1. Sign in to YouTube
                2. Click the upload button (camera icon with plus)
                3. Select your MP4 file
                4. Fill in video details
                5. Publish your video
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">How to convert YouTube videos to MP4 on Mac?</h4>
              <p className="text-gray-600 dark:text-gray-300">
                The process is the same as on any other device. Our recommended online converters work on all platforms, including Mac. Simply open your browser, visit any of the converter tools above, and follow the conversion steps. No additional software installation is required.
              </p>
            </div>
          </div>
        </div>

        {/* 技术说明 */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4">How YouTube to MP4 Conversion Works</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            When you convert a YouTube video to MP4, the process involves:
          </p>
          <ol className="space-y-3 text-gray-600 dark:text-gray-300 list-decimal pl-5">
            <li>Extracting the video stream from YouTube&apos;s servers</li>
            <li>Converting the video to MP4 format if needed</li>
            <li>Optimizing the video quality and file size</li>
            <li>Delivering the converted file to your device</li>
          </ol>
        </div>

        {/* 安全提示 */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Safety and Legal Considerations</h3>
          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300">
              When downloading YouTube videos, remember:
              • Only download videos for personal use
              • Respect content creators&apos; rights
              • Be aware of your country&apos;s copyright laws
              • Use trusted converter tools to avoid malware
              • Don&apos;t distribute downloaded content without permission
            </p>
          </div>
        </div>
      </section>

      {/* Quality Tips */}
      <section className="max-w-4xl mx-auto mt-12 px-4 mb-20">
        <h3 className="text-xl font-semibold mb-4">Tips for Best Quality Downloads</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Choose the Right Quality</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Select the quality that matches your needs:
              • 1080p for best quality
              • 720p for good balance
              • 480p for smaller file size
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Check File Size</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Higher quality means larger files:
              • 1080p ≈ 150MB per 10min
              • 720p ≈ 80MB per 10min
              • 480p ≈ 40MB per 10min
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-center text-sm text-gray-500">
        <p>Note: When using YouTube to MP4 converters, please respect copyright laws and YouTube&apos;s terms of service.</p>
      </footer>
    </div>
  );
}
