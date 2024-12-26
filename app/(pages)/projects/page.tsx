import Card from "@/components/card";
import { ContentType } from "@/types";
import { shimmer, toBase64 } from "@/utils/helpers";
import Image from "next/image";

const content: ContentType[] = [
  {
    id: 1,
    title: "Portfolio App 2.0",
    image: {
      src: "/images/portfolio_app_2_0.jpg",
      alt: "Screenshot of Portfolio App 2.0",
    },
    url: {
      link: "https://github.com/timtbdev/Portfolio-App-2",
      text: "Learn more",
    },
    text: [
      "This portfolio app showcases my Android development skills and passion. It’s built with Kotlin, using Android Jetpack, Material Design, and Firebase, along with libraries like Retrofit, OkHttp, Glide, LeakCanary, and Koin.",
      "The app follows the MVVM architecture for clean and maintainable code. It works offline by loading data from a local Room database and syncing with the network when needed. I also added smart features like efficient API syncing and seamless data handling with Coroutines. The code is available on GitHub",
    ],
  },
  {
    id: 2,
    title: "Portfolio App 1.0",
    image: {
      src: "/images/portfolio_app_1_0.jpg",
      alt: "Screenshot of Portfolio App 1.0",
    },
    url: {
      link: "https://github.com/timtbdev/Portfolio-App-1",
      text: "Learn more",
    },
    text: [
      "Portfolio App 1.0 is a Java-based Android application that fetches content from a REST API, follows the MVC architecture for clean organization, and uses libraries like Retrofit for API calls, OkHttp for networking, and Glide for smooth image handling.",
      "It also integrates Firebase Analytics to track user activity and Crashlytics to monitor and fix any issues. The project is open source and available on GitHub.",
    ],
  },
];

export default async function ProjectPage() {
  return (
    <div className="grid grid-cols-1 gap-6 md:gap-8">
      {content.map((item, index) => (
        <Card key={index}>
          {/* Project Image */}
          <div className="lg:aspect-square relative mx-auto flex aspect-[16/9] sm:aspect-[2/1] lg:max-w-3xl">
            <Image
              src={item.image?.src || ""}
              alt={item.image?.alt || "Project Image"}
              fill={true}
              className="absolute inset-0 h-full w-full rounded-xl object-cover shadow-md md:rounded-2xl"
              placeholder={`data:image/svg+xml;base64,${toBase64(
                shimmer(256, 256),
              )}`}
            />
          </div>
          <div className="relative mx-auto max-w-3xl px-6 py-4">
            {/* Project Title */}
            <h1 className="text-balance text-2xl font-bold tracking-tight text-gray-900 first:mt-0 dark:text-gray-100 md:text-3xl">
              {item.title}
            </h1>
            {/* Project Content */}
            <div className="text-base leading-7 text-gray-600 dark:text-gray-400 md:leading-8">
              {item.text.map((item, index) => (
                <p key={index} className="mt-4">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
