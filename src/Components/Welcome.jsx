


function Welcome() {
    return (
        <>
            {/* main container for welcome  */}
            <div className="fixed inset-0  flex justify-center items-center flex-col p-4 bg-blue-500">
                <div className="welcome flex flex-col items-center">
                    <img src="/favicon.png" className="w-[200px] rounded-4xl" alt="" />
                    <div className="flex flex-col md:flex-row gap-2 items-center">
                        <h1 className="text-white text-xl lg:text-4xl font-mono">Welcome to </h1><div className="font-bold bg-white rounded-4xl p-2 md:p-4 text-xl lg:text-4xl"><span className="text-blue-600 ">Shoppy</span><span className="text-orange-600">Globe</span></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome;