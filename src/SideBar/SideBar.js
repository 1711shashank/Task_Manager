import React from 'react'
import CommitIcon from '@mui/icons-material/Commit';
import './SideBar.css'
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const SideBar = () => {
    return (
        <>
            <div className='timeLine'>
                <div className='timeLine__header'>
                    <Button className='timeLine__addButon' variant="outlined" startIcon={<AddIcon />}>Add</Button>
                </div>
                <div className='timeLine__body'>
                    <div className='timeLine__container'>
                        <div className='timeLine__containerUp'>
                            <CommitIcon className='timeLine__logo' />
                            <p className='timeLine__date'>Feb 19, 2023</p>
                        </div>
                        <div className='timeLine__containerDown'>
                            <div className='timeLine__day'>
                                <ol className='timeLine__dayItems'>
                                    <li className='timeLine__dayItem'>
                                        <h2>Topice Heading slkfjsdlkmcdsm</h2>
                                        <p>Discription</p>
                                    </li>
                                    <li className='timeLine__dayItem'>
                                        <h2>Topice Heading</h2>
                                        <p> Emmet is an awesome tool. </p>
                                    </li>
                                    <li className='timeLine__dayItem'>
                                        <h2>Topice Heading</h2>
                                        <p> Emmet is an awesome tool. </p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    
                    <div className='timeLine__container'>
                        <div className='timeLine__containerUp'>
                            <CommitIcon className='timeLine__logo' />
                            <p className='timeLine__date'>Feb 19, 2023</p>
                        </div>
                        <div className='timeLine__containerDown'>
                            <div className='timeLine__day'>
                                <ol className='timeLine__dayItems'>
                                    <li className='timeLine__dayItem'>
                                        <h2>Topice Heading slkfjsdlkmcdsm</h2>
                                        <p>Discription</p>
                                    </li>
                                    <li className='timeLine__dayItem'>
                                        <h2>Topice Heading</h2>
                                        <p> Emmet is an awesome tool. </p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SideBar