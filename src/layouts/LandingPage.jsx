import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import companies from "../data/companies.json";
import faqs from "../data/faqs.json";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function LandingPage() {
  return (
    <main className="container flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center gradient-title bg-clip-text text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-4 ">
          Find Your Dream Job{" "}
          <span className="flex items-center gap-2 lg:gap-6">
            and get{" "}
            <img
              src="/logo.png"
              alt="Hirdd Logo"
              className="h-9 sm:h-24 lg:h-32"
            />
          </span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>
      <div className="flex justify-center gap-6">
        <Link to="/jobs">
          <Button variant={"blue"} size="xl">
            Find Job
          </Button>
        </Link>
        <Link to="/post-job">
          <Button variant={"destructive"} size="xl">
            Post Job
          </Button>
        </Link>{" "}
      </div>

      {/* carousel */}

      <Carousel
        className="w-full py-10"
        plugins={[
          Autoplay({
            delay: 1500,
          }),
        ]}
      >
        <CarouselContent className="flex items-center gap-5 sm:gap-20">
          {companies.map(({ name, id, path }) => {
            return (
              <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                <img
                  src={path}
                  alt={name}
                  className="h-9 sm:h-14 object-contain"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      {/* banner */}
      <img src="/banner.jpeg" alt="" className="w-full" />
      {/* cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Search and apply for jobs, track applicants, and more</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Post jobs, manage applications, and find the best candidates</p>
          </CardContent>
        </Card>
      </section>
      {/* Faqs Accordion */}
      <section>
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </main>
  );
}

export default LandingPage;
