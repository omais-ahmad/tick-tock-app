import {ProfileMenu} from './ProfileBtn'
export const Header = () => {
    return (
        <>
            <header>
                <div className="flex justify-between items-center px-6 py-4 bg-white shadow">
                    <div>
                        <span className="text-[24px] text-[#111928] font-semibold mr-2">ticktock</span>
                        <span className="font-medium text-sm text-[#111928] ml-2">Timesheets</span>
                    </div>
                    <ProfileMenu/>
                </div>
            </header>

        </>

    );
};