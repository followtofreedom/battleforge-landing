
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Swords, Users, Ruler, Layers } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight">BattleForge <span className="text-red-500">40K</span></h1>
        <p className="mt-6 text-xl text-zinc-300 max-w-3xl mx-auto">
          A real-time tactical battle map and campaign assistant for Warhammer 40,000.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a href="#" className="px-8 py-4 bg-red-600 rounded-xl text-lg">Start a Battle</a>
          <a href="#" className="px-8 py-4 border border-zinc-600 rounded-xl text-lg">Join a Game</a>
        </div>
      </section>
    </div>
  );
}
