import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Icon } from '@iconify/react';
import moment from 'moment';
import localization from 'moment/locale/zh-cn';

const data = [{ name: "Page A", uv: 4e3, pv: 2400, amt: 2400 }, { name: "Page B", uv: 3e3, pv: 1398, amt: 2210 }, { name: "Page C", uv: 2e3, pv: 9800, amt: 2290 }, { name: "Page D", uv: 2780, pv: 3908, amt: 2e3 }, { name: "Page E", uv: 1890, pv: 4800, amt: 2181 }, { name: "Page F", uv: 2390, pv: 3800, amt: 2500 }, { name: "Page G", uv: 3490, pv: 4300, amt: 2100 }, { name: "Page H", uv: 2e3, pv: 3e3, amt: 1900 }, { name: "Page I", uv: 3500, pv: 4800, amt: 2700 }, { name: "Page J", uv: 4500, pv: 5600, amt: 3200 }, { name: "Page K", uv: 2700, pv: 3600, amt: 2600 }, { name: "Page L", uv: 3200, pv: 4200, amt: 2300 }, { name: "Page M", uv: 2800, pv: 3800, amt: 2100 }, { name: "Page N", uv: 2300, pv: 3100, amt: 1800 }, { name: "Page O", uv: 3900, pv: 4700, amt: 2600 }, { name: "Page P", uv: 2700, pv: 3500, amt: 2200 }, { name: "Page Q", uv: 3200, pv: 4e3, amt: 2900 }, { name: "Page R", uv: 2600, pv: 3400, amt: 2300 }, { name: "Page S", uv: 2400, pv: 3200, amt: 2100 }, { name: "Page T", uv: 3100, pv: 3900, amt: 2800 }, { name: "Page U", uv: 2800, pv: 3700, amt: 2500 }, { name: "Page V", uv: 3300, pv: 4200, amt: 2700 }, { name: "Page W", uv: 2700, pv: 3500, amt: 2200 }, { name: "Page X", uv: 3e3, pv: 4e3, amt: 2600 }, { name: "Page Y", uv: 2200, pv: 3e3, amt: 2100 }, { name: "Page Z", uv: 2800, pv: 3600, amt: 2400 }, { name: "Page AA", uv: 3300, pv: 4200, amt: 2700 }, { name: "Page BB", uv: 2600, pv: 3400, amt: 2300 }, { name: "Page CC", uv: 2500, pv: 3300, amt: 2200 }, { name: "Page DD", uv: 3100, pv: 3900, amt: 2800 }, { name: "Page EE", uv: 2900, pv: 3700, amt: 2500 }, { name: "Page FF", uv: 3200, pv: 4e3, amt: 2600 }];
const tempdata = [
    {
        rank: 1,
        username: '黄嘉慧',
        monthly_time: 198.8,
        weekly_time: 20.8,
        level: 50,
        current_user: false,
    },
    {
        rank: 2,
        username: '侯韦杉',
        monthly_time: 162.7,
        weekly_time: 12.8,
        level: 48,
        current_user: true,
    },
    {
        rank: 3,
        username: '郭循正',
        monthly_time: 156.8,
        weekly_time: 14.8,
        level: 45,
        current_user: false,
    },
    {
        rank: 4,
        username: '孙骏祥',
        monthly_time: 155.6,
        weekly_time: 15.9,
        level: 45,
        current_user: false,
    },
    {
        rank: 5,
        username: '谢品文',
        monthly_time: 146.6,
        weekly_time: 10.8,
        level: 42,
        current_user: false,
    },
    {
        rank: 6,
        username: '蔡陈礼詺',
        monthly_time: 145.5,
        weekly_time: 10.4,
        level: 41,
        current_user: false,
    },
]

moment.updateLocale('zh-cn', localization);

export default function Dashboard() {
    console.log(moment().locale('zh-cn').format('LLL'));
    return (
        <div>
            <div className="drawer drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
                <div className="drawer-content flex flex-col m-12 space-y-6">
                    {/* Page content here */}
                    <div className='w-full flex flex-row'>
                        <div className='flex flex-col gap-y-2'>
                            <h1 className='text-primary font-bold'>你好，韦杉！</h1>
                            <h6 className='text-medium '>祝你有个美好的一天！</h6>
                        </div>
                        <span className='flex-grow'></span>
                        <div className='flex flex-col gap-y-2'>
                            <h3 className='text-end tracking-wide'>晚上8时23分</h3>
                            <p className='text-medium text-end'>2023年11月3日 | 星期五</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-x-5'>
                        <div className='w-2/3 space-y-6'>
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
                            <div className='w-full h-[18rem] bg-neutral rounded-lg p-8'>
                                <p className='title font-normal'>本月总学习时间</p>
                                <h2 className='stat-value'>162.7小时</h2>
                                <div className='w-full h-full py-8 pr-16'>
                                    <ResponsiveContainer width="100%" height="100%" className="p-0 m-0">
                                        <BarChart data={data}>
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Bar dataKey="uv" fill="#8884d8" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>


                            <div className='flex flex-row gap-x-5 px-5 text-primary font-medium text-3xl'><Icon className='inline' icon="bx:medal"></Icon><h4>排行榜</h4></div>
                            <div className='w-full h-auto bg-neutral rounded-lg p-8'>
                                <table className="table table-md">
                                    <thead>
                                        <tr>
                                            <th className='text-center'>排名</th>
                                            <th>用户名</th>
                                            <th className='text-center'>本月时间（小时）</th>
                                            <th className='text-center'>本周时间（小时）</th>
                                            <th className='text-center'>等级</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tempdata.map((item) => (
                                            <tr className={item.current_user ? "bg-secondary" : ""}>
                                                <th className='text-center'>{item.rank}</th>
                                                <td className='flex gap-x-4 overflow-visible whitespace-nowrap'>
                                                    <div className="avatar">
                                                        <div className="w-6 h-6 rounded-full">
                                                            <img src="vite.svg" />
                                                        </div>
                                                    </div>
                                                    {item.username}
                                                </td>

                                                <td className='text-center'>{item.monthly_time}</td>
                                                <td className='text-center'>{item.weekly_time}</td>
                                                <td className='text-center'>{item.level}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className='w-1/3 space-y-6'>
                            <span className='flex-grow'></span>
                            {/* Place intended for right side content (1/3 of page width) */}
                            <div class="card bg-gradient-to-br from-primary to-accent text-primary-content py-9">
                                <div class="card-body">
                                    <p>还在等什么？</p>
                                    <h2 class="card-title text-6xl font-black"><Icon icon="mingcute:right-fill"></Icon>立刻开始学习！</h2>
                                </div>
                            </div>
                            <div className='flex flex-row gap-x-5 px-5 text-primary font-medium text-3xl'><Icon className='inline' icon="bx:medal"></Icon><h4>成就</h4></div>

                            <div className='w-full bg-neutral rounded-lg p-8 flex flex-row gap-x-8 text-4xl text-white'>
                                <div className='indicator w-1/3 h-24 bg-secondary rounded-full shadow-lg flex items-center justify-center'>
                                    <span class="indicator-item badge badge-primary">x87</span> 
                                    <Icon icon="teenyicons:book-solid"></Icon>
                                </div>
                                <div className='indicator w-1/3 h-24 bg-secondary rounded-full shadow-lg flex items-center justify-center'><Icon icon="teenyicons:book-solid"></Icon></div>
                                <div className='indicator w-1/3 h-24 bg-secondary rounded-full shadow-lg flex items-center justify-center'><Icon icon="teenyicons:book-solid"></Icon></div>
                                <div className='indicator w-1/3 flex items-center justify-center'><Icon icon="gg:more-alt"></Icon></div>
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