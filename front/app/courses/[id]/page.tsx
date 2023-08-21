"use client";
import { useEffect, useState } from "react";
import type { Course } from "../../../types";

export default function Page({ params }: { params: { id: string } }) {
  const [course, setCourse] = useState<Course>();

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/courses/${params.id}`)
      .then((res) => res.json())
      .then((data) => setCourse(data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <h1>Courses#show</h1>
      <h1>{course!.name}</h1>
    </>
  );
}
