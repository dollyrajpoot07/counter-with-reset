import Counter from "@/components/Counter";

export default function Home() {
    return (
        <main>
            <h1>Counter with reset</h1>
            <Counter label='Step Counter'/>
            <Counter label='Likes'/>
        </main>
    )
}