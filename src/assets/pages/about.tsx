import FooterIcon from "../component/footericon";

function About() {
  return (
    <>
      <h1 className="text-4xl font-normal mb-8">About</h1>
      <div id="about" className=" pb-5 mb-5 ">
        <p className="text-left text-lg font-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos neque
          harum, natus quod, molestiae deserunt numquam ipsam, eaque dolores ab
          velit fugiat unde. Deserunt facilis esse veniam iste natus fuga!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          dolorum doloribus incidunt quasi illum adipisci numquam autem natus
          voluptatibus provident impedit, saepe culpa eaque inventore ratione
          voluptas laudantium iusto aut!
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
          dignissimos voluptatibus doloremque perferendis, dolores earum
          laudantium alias officiis numquam totam quia accusamus distinctio
          culpa minus! Distinctio inventore voluptates vel sequi! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Exercitationem, cum
          porro. Explicabo doloribus eveniet eum quia nesciunt vitae, dolores
          neque quidem non accusamus nobis debitis! Velit atque accusantium non
          eum!
        </p>
      </div>

      <h2 className="text-4xl font-normal mb-5">Videos</h2>
      <div id="videos" className="h-[80vh] my-5  grid grid-cols-3 gap-3">
        <div className="h-[100%] w-[100%] border border-1 border-gray-950"></div>
        <div className="h-[100%] w-[100%] bg-white border border-1 border-gray-950"></div>
        <div className="h-[100%] w-[100%] bg-white border border-1 border-gray-950"></div>
      </div>
      <button className=" hover:border hover:border-1 hover:border-gray-950 h-[3rem] w-[50%]">
        view more
      </button>
      <div id="contact" className="pt-10 pb-20 flex justify-center">
        <FooterIcon />
      </div>
    </>
  );
}

export default About;
