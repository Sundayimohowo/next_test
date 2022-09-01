import { useSelector } from 'react-redux';
import { AllState } from '../../store/reducers/allReducer';
import ItemCard from './ItemCard';
const AllList = () => {
    const all = useSelector<any, AllState[]>((state) => state.all);

    return (
        <div className="row">
            <div className="col-12">
                <div className="row">
                    {
                        all.length? (
                            all.map((s, i) => (
                                <ItemCard data={s} key={i} />
                            ))
                        ): <div className='lead text-center mt-5'>No result found!</div>
                    }
                </div>
            </div>
        </div>
    )
}

export default AllList;