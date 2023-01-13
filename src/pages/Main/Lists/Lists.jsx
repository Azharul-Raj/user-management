
const Lists = (client) => {
    const { id,Location,Time,Date}=client.client
    return (
        <div class="max-w-2xl my-5 px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-200">
        <div class="flex items-center justify-between">
                <span class="text-sm font-light text-black">{ id} : {Location}</span>
                <span class="text-sm font-light text-black">{Date} { Time}</span>
            {/* <a class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" tabindex="0" role="button">Design</a> */}
        </div>
            <h1>person detected</h1>
        
    </div>
    );
};

export default Lists;