import Card from "@/components/Card"
import Button from "@/components/Button";

const Landing = () => {
  return (
    <>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
        <Card />

        <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-8">
            <h1 className="text-2xl font-bold mb-4">Button Variants</h1>

            {/* Small buttons */}
            <div className="flex flex-col items-start gap-2">
                <Button title="Small - rounded-sm" styles="text-sm rounded-sm" />
                <Button title="Small - rounded-md" styles="text-sm rounded-md" />
                <Button title="Small - rounded-lg" styles="text-sm rounded-lg" />
            </div>

            {/* Medium buttons */}
            <div className="flex flex-col items-start gap-2">
                <Button title="Medium - rounded-sm" styles="text-base rounded-sm" />
                <Button title="Medium - rounded-md" styles="text-base rounded-md" />
                <Button title="Medium - rounded-lg" styles="text-base rounded-lg" />
            </div>

            {/* Large buttons */}
            <div className="flex flex-col items-start gap-2">
                <Button title="Large - rounded-sm" styles="text-lg rounded-sm" />
                <Button title="Large - rounded-md" styles="text-lg rounded-md" />
                <Button title="Large - rounded-lg" styles="text-lg rounded-lg" />
            </div>
        </div>
    </>
  )
}
export default Landing