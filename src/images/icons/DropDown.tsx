import React from 'react'

type DataProps = {
    classNames?: string
}

const DropDownIcon:React.FC<DataProps> = ({classNames="text-primary"}) => {
    return (
        <div>
            <svg className={`${classNames}`} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.44333 8.51584L11 12.0725L14.5567 8.51584C14.9142 8.15834 15.4917 8.15834 15.8492 8.51584C16.2067 8.87334 16.2067 9.45084 15.8492 9.80834L11.6417 14.0158C11.2842 14.3733 10.7067 14.3733 10.3492 14.0158L6.14166 9.80834C5.78416 9.45084 5.78416 8.87334 6.14166 8.51584C6.49916 8.1675 7.08583 8.15834 7.44333 8.51584Z" fill="currentColor"/>
            </svg>
        </div>
    )
}

export default DropDownIcon
