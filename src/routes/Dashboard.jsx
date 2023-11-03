import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

export default function Dashboard() {
    return (
        <div>
            <div className="drawer drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
                <div className="drawer-content flex flex-col m-12">
                    {/* Page content here */}
                    <div className='w-full flex flex-row'>
                        <div className='flex flex-col gap-y-2'>
                            <h1 className='text-primary font-bold'>你好，韦杉！</h1>
                            <h6 className='text-medium '>祝你有个美好的一天！</h6>
                        </div>
                        <span className='flex-grow'></span>
                        <div className='flex flex-col gap-y-2'>
                            <h3 className='text-end tracking-wide'>晚上8时10分·雨</h3>
                            <p className='text-medium text-end'>2023年11月3日 | 星期五</p>
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='w-2/3'>
                            {/* Place intended for left side content (2/3 of page width) */}
                            <div className='flex flex-row gap-x-5 px-5 text-primary font-medium text-3xl'><Icon className='inline' icon="gridicons:stats"></Icon><h4>统计</h4></div>
                            <div className='grid grid-cols-7 gap-3 !text-white'>
                                <div className="stats col-span-2 shadow bg-accent">
                                    <div className="stat">
                                        <div className="stat-title">今日学习时间</div>
                                        <div className="stat-value">8.4小时</div>
                                        <div className="stat-desc">比昨天多了15%</div>
                                    </div>
                                </div>
                                <div className="stats col-span-2 shadow bg-warning">
                                    <div className="stat">
                                        <div className="stat-title">本周学习时间</div>
                                        <div className="stat-value">12.8小时</div>
                                        <div className="stat-desc">比上周少了2%</div>
                                    </div>
                                </div>
                                <div className="stats col-span-3 shadow bg-secondary">
                                    <div className="stat gap-x-2">
                                        <div className="stat-title">你的等级</div>
                                        <div className="stat-value flex items-center !text-5xl">31<progress className="progress w-full mx-8" value="70" max="100"></progress></div>
                                    </div>
                                </div>
                            </div>


                            <div className='flex flex-row gap-x-5 px-5 text-primary font-medium text-3xl'><Icon className='inline' icon="bx:medal"></Icon><h4>排行榜</h4></div>
                        </div>






                        <div className='w-1/3'>
                            {/* Place intended for right side content (1/3 of page width) */}
                            <div>
                                <Icon icon="ant-design:home-outlined"></Icon>
                                <h4 className='text-primary font-medium '>排行榜</h4>
                            </div>

                        </div>
                    </div>


                </div>

                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="sidebar" className="drawer-overlay" />
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><a><Icon icon="ant-design:home-outlined"></Icon></a></li>
                        <li><a><Icon icon="carbon:timer"></Icon></a></li>
                        <li><a><Icon icon="gridicons:stats"></Icon></a></li>
                        <li><a><Icon icon="fa-solid:user-friends"></Icon></a></li>
                        <li><a><Icon icon="bx:medal"></Icon></a></li>
                        <span className='flex-grow'></span>
                        <li><a><Icon icon="carbon:settings"></Icon></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}