"use client";
import React from "react";
import dynamic from "next/dynamic";
import { AchievementProps } from "@/types";
import CountUp from "react-countup";

const achievementsList: AchievementProps[] = [
  {
    metric: "sfg sf gsfdg sdfg",
    value: "25",
    postfix: "*",
  },
  {
    metric: "sdfg sdfg  fgsfgs fg",
    value: "sfg sfg sfdg sdfg sdfg",
    postfix: "*",
  },
  {
    metric: "sdfg sdfg sfdg sdfg sfd",
    value: "sd gfsdfg sdf gsfd gsd",
    postfix: "*",
  },
  {
    metric: "sdf gsdf ggfdsfgs fgfsdgsf",
    value: "sdfg sd fgfsdg sdfg sd",
    postfix: "*",
  }
];

const AchievementsSection = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-24 xl:pb-0">
      <div className="primary-bd container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {achievementsList.map((achievement, index) => {
              return (
              <div
                key={index}
                className="flex flex-1 items-center gap-4 justify-center xl:justify-start"
              >
                <CountUp 
                  end={parseInt(achievement.value+achievement.postfix)}
                  duration={5}
                  delay={2}
                className="text-4xl text-outline text-transparent xl:text-6xl font-extrabold"
                />
                <p
                  className={`text-white/80 ${achievement.metric.length > 15 ? 'max-w-[100px]' : 'max-w-[150px]'} leading-snug`}
                >
                  {achievement.metric}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

