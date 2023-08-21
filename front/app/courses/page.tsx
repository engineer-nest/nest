"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Course } from "../../types";

export default function Page() {
  const [courses, setCourses] = useState<Course>();

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <div>couses.index</div>
      {courses?.map((course, index) => (
        <div key={index}>
          <Link href={`/courses/${index}`}>{course.name}</Link>
          <br />
        </div>
      ))}
    </>
  );
}
