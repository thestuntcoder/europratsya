import * as React from 'react';

export default function JobAd(props) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <p className="text-sm font-medium text-blue-500">
            <a href={props.linkto} className="hover:underline">
              {props.title}, {props.employer}
            </a>
          </p>
          <a href={props.linkto} className="mt-2 block">
            <p className="text-xl font-semibold text-gray-900">
              {props.position}
            </p>
            <p className="mt-3 text-base text-gray-500">{props.description}</p>
          </a>
        </div>
        <div className="mt-6 flex items-center">
          <div>
            <p className="text-sm font-medium text-gray-900">
              <a href={props.linkto} className="hover:underline">
                {props.location}
              </a>
            </p>
            <div className="flex space-x-1 text-sm capitalize text-gray-500">
              {props.salary}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
