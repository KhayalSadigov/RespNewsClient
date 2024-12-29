import { useContext } from 'react';
import styles from './index.module.scss'
import { DataContext } from '../../Context/dataContext';
import { useNavigate } from 'react-router-dom';
import Base_Url from '../../Constant/base_url';

function CategoryModal() {
    let store = useContext(DataContext);
    console.log(store.categories.data)
    const navigate = useNavigate()
    return (
        <aside className={styles.modal}>
            <div className={styles.glass} onClick={() => {
                store.categories.setModal(false)
            }} style={store.categories.modal ? {} : { display: 'none' }}>

            </div>
            <div className={styles.categories} style={store.categories.modal ? { right: '0' } : {}}>
                <div className={styles.closeBtn} onClick={() => {
                    store.categories.setModal(false)
                }}>Bağla</div>
                {store.categories.data.map((e, i) => {
                    return (
                        <div key={i} onClick={() => {
                            navigate(
                                `search/category/${e.categoryId}`
                            );
                        }} className={styles.card}>
                            <img src={Base_Url + e.categoryCoverUrl} alt={e.categoryName} />
                            <div className={styles.cardGlass}>
                                <span>{e.categoryName}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </aside>
    )
}

export default CategoryModal    