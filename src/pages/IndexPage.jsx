import profilePhoto from '../assets/my-photo.jpg'
import { Link, Outlet, useLocation, useParams } from 'react-router-dom'

export default function IndexPage(){
    const job = useLocation().pathname.split('/')[1];

    function links(type = null){
        let classes = 'w-1/4 py-1 ';

        if (type === job || (job === '' && type ==='data')) {
            classes += 'text-white rounded-full bg-blue-200'
        }
        return classes
    }
    return (
        <div>          
            <div className='mb-16'>
                 {/* About me section */}
                <section className='mb-16'>
                    <h1 className='text-3xl'>Phuong Huynh</h1>
                    <div className='flex justify-center m-8'>
                        <img className='rounded-full w-48' src={profilePhoto} alt="" />
                    </div>

                    <div className='flex justify-center'>
                        <p className='w-1/2 text-center'>Recent San Jose State University graduate with a 
                        Bachelor's in Applied Mathematics, Statistics Concentration passionate about data analysis and web development.</p>
                    </div>
                    <div className='flex justify-center gap-4 mt-4'>
                        <h5>
                            <a href="PhuongOhashi.pdf" target="_blank"> Resume </a> | 
                            <a href="https://www.linkedin.com/in/phuonghuynh9987/" target="_blank"> LinkedIn </a> | 
                            <a href="https://github.com/PhuongHuynh9987" target="_blank"> GitHub </a> |
                            <a href="https://public.tableau.com/app/profile/phuong.huynh5548/vizzes" target="_blank"> Tableau </a>
                        </h5>
                    </div>
                </section>

                {/* Portfolio section */}
                <section>
                    <div className='flex justify-center gap-10'>
                        <Link className={links('data')} to={'/'}><h2 className='font-bold text-lg cursor-pointer'>Data Analysis</h2></Link>
                        <Link className={links('web')} to={'/web'}><h2 className='font-bold text-lg cursor-pointer'>Web Development</h2></Link>
                    </div>
                </section>
            </div>
        <Outlet />
       </div>
    )
}