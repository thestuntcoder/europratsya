import * as React from 'react';
import { Link } from 'gatsby';

export default function JobAd(props) {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-blue-500">
            <Link to={props.linkto} className="hover:underline">
              {props.location}
            </Link>
          </p>
          <Link to={props.linkto} className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">
              {props.position}
            </p>
            <p className="mt-3 text-base text-gray-500">{props.description}</p>
          </Link>
        </div>
        <div className="mt-6 flex items-center">
          <div>
            <p className="text-sm font-medium text-gray-900">
              <Link to={props.linkto} className="hover:underline">
                {props.title}, {props.employer}
              </Link>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500 capitalize">
              {props.salary}
              <br />
              {props.contact_detail}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
