import image from './assets/gift.png';

const Gift = () => {
  return (
    <div className='w-full h-40 justify-end flex items-center'>
      <div id="gift" className="w-[300px] h-[300px] justify-center flex items-center">
        <img src={image} alt="gift" className="w-[300px] h-[300px] ml-[110px]" />
      </div>
    </div>
  );
};

export default Gift;
