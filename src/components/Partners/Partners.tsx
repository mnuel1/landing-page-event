
interface PartnerProp  {
    image: string
}

const partners:PartnerProp[]= [
    {
        image:"https://s3-alpha-sig.figma.com/img/414f/cec1/da158fffe6db3938bd10fb44368ea1e0?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LiMw0VcLhruRaKH0IHt6NMaTnO6dexo2sDQEvqGkp8fuTQgP0jLgyhtfvu0nFkB6nE3UxYY8hVpxDuKNnimhWGX3Io68tQJPkPfgFKOlKl5rFW~jiv2TzJGVaye~ALwGAhYqcMMlhCGq4rFjrarpUsQ5wg28fqE00P94ARmtGPUbzBpj0UDWVok2J2JimI1-Md0LuQu-exrPQhucRMyOV8XnV7h2Y4MX-wDNHVc3my4Ou33XRdZFr31lXr1GrE3iuk71NgfMCi7aMhdUKVgI~OdCVUqqyBLRVFNmPgh~fTaf6RjivRJKhaylIIp0kPbA0bTvA6IMILJR3NwjCMu7HQ__"
    },
    {
        image:"https://s3-alpha-sig.figma.com/img/414f/cec1/da158fffe6db3938bd10fb44368ea1e0?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LiMw0VcLhruRaKH0IHt6NMaTnO6dexo2sDQEvqGkp8fuTQgP0jLgyhtfvu0nFkB6nE3UxYY8hVpxDuKNnimhWGX3Io68tQJPkPfgFKOlKl5rFW~jiv2TzJGVaye~ALwGAhYqcMMlhCGq4rFjrarpUsQ5wg28fqE00P94ARmtGPUbzBpj0UDWVok2J2JimI1-Md0LuQu-exrPQhucRMyOV8XnV7h2Y4MX-wDNHVc3my4Ou33XRdZFr31lXr1GrE3iuk71NgfMCi7aMhdUKVgI~OdCVUqqyBLRVFNmPgh~fTaf6RjivRJKhaylIIp0kPbA0bTvA6IMILJR3NwjCMu7HQ__"
    },
    {
        image:"https://s3-alpha-sig.figma.com/img/414f/cec1/da158fffe6db3938bd10fb44368ea1e0?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LiMw0VcLhruRaKH0IHt6NMaTnO6dexo2sDQEvqGkp8fuTQgP0jLgyhtfvu0nFkB6nE3UxYY8hVpxDuKNnimhWGX3Io68tQJPkPfgFKOlKl5rFW~jiv2TzJGVaye~ALwGAhYqcMMlhCGq4rFjrarpUsQ5wg28fqE00P94ARmtGPUbzBpj0UDWVok2J2JimI1-Md0LuQu-exrPQhucRMyOV8XnV7h2Y4MX-wDNHVc3my4Ou33XRdZFr31lXr1GrE3iuk71NgfMCi7aMhdUKVgI~OdCVUqqyBLRVFNmPgh~fTaf6RjivRJKhaylIIp0kPbA0bTvA6IMILJR3NwjCMu7HQ__"
    },
    {
        image:"https://s3-alpha-sig.figma.com/img/414f/cec1/da158fffe6db3938bd10fb44368ea1e0?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LiMw0VcLhruRaKH0IHt6NMaTnO6dexo2sDQEvqGkp8fuTQgP0jLgyhtfvu0nFkB6nE3UxYY8hVpxDuKNnimhWGX3Io68tQJPkPfgFKOlKl5rFW~jiv2TzJGVaye~ALwGAhYqcMMlhCGq4rFjrarpUsQ5wg28fqE00P94ARmtGPUbzBpj0UDWVok2J2JimI1-Md0LuQu-exrPQhucRMyOV8XnV7h2Y4MX-wDNHVc3my4Ou33XRdZFr31lXr1GrE3iuk71NgfMCi7aMhdUKVgI~OdCVUqqyBLRVFNmPgh~fTaf6RjivRJKhaylIIp0kPbA0bTvA6IMILJR3NwjCMu7HQ__"
    },
    {
        image:"https://s3-alpha-sig.figma.com/img/414f/cec1/da158fffe6db3938bd10fb44368ea1e0?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LiMw0VcLhruRaKH0IHt6NMaTnO6dexo2sDQEvqGkp8fuTQgP0jLgyhtfvu0nFkB6nE3UxYY8hVpxDuKNnimhWGX3Io68tQJPkPfgFKOlKl5rFW~jiv2TzJGVaye~ALwGAhYqcMMlhCGq4rFjrarpUsQ5wg28fqE00P94ARmtGPUbzBpj0UDWVok2J2JimI1-Md0LuQu-exrPQhucRMyOV8XnV7h2Y4MX-wDNHVc3my4Ou33XRdZFr31lXr1GrE3iuk71NgfMCi7aMhdUKVgI~OdCVUqqyBLRVFNmPgh~fTaf6RjivRJKhaylIIp0kPbA0bTvA6IMILJR3NwjCMu7HQ__"
    },
]

export const Partners: React.FC = () => {

    return (
        <div className="flex items-center justify-center flex-col mt-36 overflow-hidden">
            <h1 className="text-lg md:text-3xl font-inter font-bold mb-12">OUR COMPANY PARTNER</h1>
            <div className="flex gap-8 overflow-x-auto p-4">
                {partners.map((partner, index) => (
                    <img key={index} src={partner.image} 
                    alt="" width={'201px'}/>
                ))}                                                
            </div>
        </div>
    )
}