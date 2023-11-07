import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[600px] rounded-xl my-8">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full object-cover top-0" />
          <div className="absolute h-full flex items-center pl-16 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="w-6/12 space-y-7 text-white">
              <h2 className="text-6xl pr-5">Affordable Price for car Servicing</h2>
              <p>
                There are many variations of passages of  available, but the majority have suffered alteration in some form
              </p>
              <button className="btn btn-warning">Discover More</button>
              <button className="btn btn-outline btn-warning ms-5">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide6" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle mr-5">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full" />
          <div className="absolute h-full flex items-center pl-16 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="w-6/12 space-y-7 text-white">
              <h2 className="text-6xl pr-5">Affordable Price for car Servicing</h2>
              <p>
                There are many variations of passages of  available, but the majority have suffered alteration in some form
              </p>
              <button className="btn btn-warning">Discover More</button>
              <button className="btn btn-outline btn-warning ms-5">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle mr-5">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full" />
          <div className="absolute h-full flex items-center pl-16 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="w-6/12 space-y-7 text-white">
              <h2 className="text-6xl pr-5">Affordable Price for car Servicing</h2>
              <p>
                There are many variations of passages of  available, but the majority have suffered alteration in some form
              </p>
              <button className="btn btn-warning">Discover More</button>
              <button className="btn btn-outline btn-warning ms-5">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle mr-5">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full" />
          <div className="absolute h-full flex items-center pl-16 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="w-6/12 space-y-7 text-white">
              <h2 className="text-6xl pr-5">Affordable Price for car Servicing</h2>
              <p>
                There are many variations of passages of  available, but the majority have suffered alteration in some form
              </p>
              <button className="btn btn-warning">Discover More</button>
              <button className="btn btn-outline btn-warning ms-5">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle mr-5">
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={img5} className="w-full" />
          <div className="absolute h-full flex items-center pl-16 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="w-6/12 space-y-7 text-white">
              <h2 className="text-6xl pr-5">Affordable Price for car Servicing</h2>
              <p>
                There are many variations of passages of  available, but the majority have suffered alteration in some form
              </p>
              <button className="btn btn-warning">Discover More</button>
              <button className="btn btn-outline btn-warning ms-5">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide6" className="btn btn-circle mr-5">
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src={img6} className="w-full" />
          <div className="absolute h-full flex items-center pl-16 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="w-6/12 space-y-7 text-white">
              <h2 className="text-6xl pr-5">Affordable Price for car Servicing</h2>
              <p>
                There are many variations of passages of  available, but the majority have suffered alteration in some form
              </p>
              <button className="btn btn-warning">Discover More</button>
              <button className="btn btn-outline btn-warning ms-5">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide5" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle mr-5">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;