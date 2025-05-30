import Right from './assets/right.png';
import Left from './assets/left.png';
import Up from './assets/up.png';
import Down from './assets/down.png';
const Button =()=>{
    return (<>
    <div className="w-[150px] h-[139px] relative top-[-290px] left-[155px] lg:left-[45%] lg:top-[-394.7px] md:left-[38%] md:top-[-350px] z-50 justify-center items-center flex">
        <div className="bg-amber-400 w-[55px] h-[55px] border-6 border-black relative left-[38px] justify-center items-center flex rounded-full"/>
        <button className="w-[40px] h-[40px]  bg-transparent  hover:bg-amber-400 rounded-2xl relative top-[-48px] left-[-10px]" ><img src={Up}></img></button>
        <button className="w-[40px] h-[40px] bg-transparent hover:bg-amber-400 rounded-2xl relative top-[48px] left-[-49px] " ><img src={Down}></img></button>
        <button className="w-[40px] h-[40px] bg-transparent hover:bg-amber-400 rounded-2xl absolute top-[50px] left-[101px] " ><img src={Right}></img></button>
        <button className="w-[40px] h-[40px] bg-transparent hover:bg-amber-400 rounded-2xl absolute top-[50px] left-[4px] " ><img src={Left}></img></button>
    </div>
    
    
    </>);
}
export default Button;