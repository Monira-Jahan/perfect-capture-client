

const PopularCard = ({item}) => {
    const {name,image,email}=item;
    return (
        <div>
            <div className="card bg-violet-300 lg:w-96 sm:mx-3 h-100 glass mb-8">
                <figure> <img className="h-64 w-96 " src={image} alt=" " /></figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold text-xl">{name}</h2>
                    <p><strong>Email:</strong> {email}</p>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default PopularCard;