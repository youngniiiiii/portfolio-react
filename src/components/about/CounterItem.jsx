import React from 'react';

const CounterItem = ({ title, counter, measurement }) => {
  return (
    <div className="mb-20 sm:mb-0">
      <h2 className="text-secondary-dark dark:text-secondary-light mb-2 text-center text-4xl">
        {counter} {measurement}
      </h2>
      <span className="font-general-regular text-md text-ternary-dark dark:text-ternary-light block text-center">
        {title}
      </span>
    </div>
  );
};

export default CounterItem;
