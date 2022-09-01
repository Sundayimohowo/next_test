import { EffectCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getAll } from '../../store/actions';
import { AllState } from '../../store/reducers/allReducer';
import ItemCard from './ItemCard';

const AllList = ({term} :{term :string}) => {
    const all = useSelector<any, AllState[]>((state) => state.all);
    const dispatch = useDispatch();
    const pageRef = useRef<number>(1);
    const [ loading, setLoading ] = useState<boolean>(false);

    useEffect(() :ReturnType<EffectCallback> => {
        const getAddition = async () => {
          if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            setLoading(true);
            pageRef.current += 1;
            await dispatch(await getAll(term, pageRef.current, false));
            setLoading(false);
          }
        }
        window.onscroll = function(ev) {
          getAddition();
        };
        getAddition();
    
        return ():void => {window.onscroll = null;}
    }, [])

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
            {loading? <div className="lead text-center">Loading new items...</div>: null}
        </div>
    )
}

export default AllList;