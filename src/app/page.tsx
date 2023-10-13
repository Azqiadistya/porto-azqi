import Image from 'next/image'
export default function Home() {
  return (
    <body className="bg-white dark:bg-black">
      <div className="container mx-auto px-52 grid grid-cols-3 gap-4 pt-12">
        <div className="...">
          <p className="font-['Rajdhani']">Section1</p>
        </div>
        <div className="col-span-2 text-4xl">
          <h1 className="font-['Rajdhani']">Hi, I m Azqiadistya</h1>
          <div>
            <ul className="list-disc">
              <li className="text-sm font-['Rajdhani']">Frontend Developer</li>
              <li className="text-sm font-['Rajdhani']">Based in Yogyakarta</li>
            </ul>
          </div>
          <p className="text-sm font-['Rajdhani']">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae optio ratione aperiam minima consequuntur autem necessitatibus repellat molestias, quasi impedit dolor, distinctio, odit alias minus praesentium inventore tenetur aliquam.</p>
        </div>
      </div>
    </body>
  )
}
