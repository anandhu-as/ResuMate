import NavBar from "~/components/NavBar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";
import { useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";
import { useEffect } from "react";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "ResuMate" },
    { name: "description", content: "" },
  ];
}

export default function Home() {
  const navigate=useNavigate()
  const {auth}=usePuterStore();
  useEffect(()=>{
    !auth.isAuthenticated && navigate('/auth?next=/')
  },[auth.isAuthenticated])
  return (
    <main className="bg-home">
      <NavBar />
      <section className="main-section">
        <div className="page-heading">
          <h1>Track your Applications & Resume Ratings</h1>
          <h2>Review your submissions and check AI-powered feedback</h2>
        </div>
      </section>
      {resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume) => {
            return <ResumeCard key={resume.id} resume={resume} />;
          })}
        </div>
      )}
    </main>
  );
}
