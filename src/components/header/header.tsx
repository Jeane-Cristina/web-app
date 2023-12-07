import Filter from '../filter/filter';
import styles from './header.module.css';

import { BsFillGrid3X3GapFill } from 'react-icons/bs'

export default function Header(){

    const numeroDePaginas = 2;

    return (
        <div className={styles.header}>
            <div className={styles.start}>
                <Filter name='Section' options={['HOT', 'TOP', 'USER']} />
                <Filter name='Sort' options={['VIRAL', 'TOP', 'TIME', 'RISING']}  />
                <Filter name='Window' options={['DAY', 'WEEK', 'MONTH', 'YEAR', 'ALL']} />
            </div>
            <div className={styles.end}>
                <Filter name='Number' icon={<BsFillGrid3X3GapFill />} options={['4', '8', '16', '20']} />
            </div>
        </div>
    )
}