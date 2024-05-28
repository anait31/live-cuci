import PropTypes from 'prop-types';

const Cuci = ({ cuci }) => {
    const {platform, amount, game, time} = cuci;
  return (
    <div className="relative">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        
        <tbody className="odd:bg-black">
          <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-red-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th
              scope="row"
              className="w-1/6 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {platform}
            </th>
            <td className="w-1/6 px-6 py-4">{amount}</td>
            <td className=" px-6 py-4">{game}</td>
            <td className="w-1/6 px-6 py-4">{time}</td>
            <td className="w-1/6 px-6 py-4">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                View Details
              </a>
              
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Cuci.propTypes  = {
    cuci: PropTypes.array
}

export default Cuci;
