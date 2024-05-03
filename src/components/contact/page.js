export default function Contact({language}) {
    return (
        <div className='flex flex-col justify-center max-w-xs'>
            <div className="ml-4 text-xl">
                {
                    language=='japanese'
                    ? 'メールはこちら、'
                    : 'contact me at:'
                }
                
            </div>
            <div className="text-primary text-3xl font-bold" >willa.yadin@gmail.com</div>
        </div>
    )
}
