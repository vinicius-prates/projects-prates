export const Card = ({id, name, description, leader, status, created_at} : {id:string, name: string, description:string, leader: string, status:number, created_at: string}) => {
    return(
        <div key={id} className="bg-[#2D2C45] flex flex-col text-white p-4 rounded-lg shadow-md gap-5">
            <div className="flex flex-col gap-1">

            <h1 className="text-lg font-bold">{name}</h1>
            <p>{description}</p>
            </div>
            <div className="flex flex-row justify-between">
                <h1 className="text-sm text-[#B5E67B]">{leader}</h1>
                <div className="flex flex-row gap-2">
                    <p className="italic opacity-50 text-sm">{created_at}</p>
                    <p className="text-sm">{status}</p>
                </div>
            </div>
        </div>
    )
}