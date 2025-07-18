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
                <Button title="Small - rounded-sm" className="text-sm rounded-sm" />
                <Button title="Small - rounded-md" className="text-sm rounded-md" />
                <Button title="Small - rounded-full" className="text-sm rounded-full" />
            </div>

            {/* Medium buttons */}
            <div className="flex flex-col items-start gap-2">
                <Button title="Medium - rounded-sm" className="text-base rounded-sm" />
                <Button title="Medium - rounded-md" className="text-base rounded-md" />
                <Button title="Medium - rounded-full" className="text-base rounded-full" />
            </div>

            {/* Large buttons */}
            <div className="flex flex-col items-start gap-2">
                <Button title="Large - rounded-sm" className="text-lg rounded-sm" />
                <Button title="Large - rounded-md" className="text-lg rounded-md" />
                <Button title="Large - rounded-full" className="text-lg rounded-full" />
            </div>
        </div>
    </>
  )
}
export default Landing