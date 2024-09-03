import React, { Fragment, useEffect, useState } from "react";
import NavBar from "../features/navbar/Navbar";
import { MobileFilter } from "../features/admin/components/AdminProductList";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const filters = [
  {
    id: "sort",
    name: "Sort",
    options: [
      {
        id: 1,
        label: "Today",
      },
      {
        id: 2,
        label: "Week",
      },
      {
        id: 3,
        label: "Month",
      },
      {
        id: 4,
        label: "Year",
      },
    ],
  },
]

const AdminAnalysis = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [isVisible, setIsVisible] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState(1);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalSales, setTotalSales] = useState(0);

  const handleFilter = (e) => {
    setSelectedFilter(e.target.value);
  };

  const handleAnalysis = async () => {
    let orderQuery = `http://localhost:8080/orders/total-orders?period=${selectedFilter}&id=${userData.id}`;
    let salesQuery = `http://localhost:8080/orders/total-sales?period=${selectedFilter}&id=${userData.id}`;
    if (userData.role != "subadmin") {
      orderQuery = `http://localhost:8080/orders/total-orders?period=${selectedFilter}`;
      salesQuery = `http://localhost:8080/orders/total-sales?period=${selectedFilter}`;
    }
    try {
      const orderRes = await fetch(orderQuery);
      const salesRes = await fetch(salesQuery);

      const orderData = await orderRes.json();
      const salesData = await salesRes.json();

      if (!orderData.success && salesData.success) {
        throw new Error("Something went wrong!");
      }
      setTotalOrders(orderData.totalOrders);
      setTotalSales(salesData.totalSales);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    handleAnalysis();
  }, [selectedFilter]);

  return (
    <div>
      <NavBar>
        <div className="bg-white flex">
          <form className="hidden lg:block">
            {filters.map((section) => (
              <Disclosure
                as="div"
                key={section.id}
                className="border-b border-gray-200 py-6"
              >
                {({ open }) => (
                  <>
                    <h3 className="-my-3 flow-root">
                      <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">
                          {section.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          {open ? (
                            <MinusIcon className="h-5 w-5" aria-hidden="true" />
                          ) : (
                            <PlusIcon className="h-5 w-5" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </h3>
                    <Disclosure.Panel className="pt-6">
                      <div className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              id={`filter-${section.id}-${optionIdx}`}
                              name={`${section.label}`}
                              type="checkbox"
                              value={option.id}
                              checked={selectedFilter == option.id}
                              onChange={handleFilter}
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`filter-${section.id}-${optionIdx}`}
                              className="ml-3 text-sm text-gray-600"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </form>
          <section className="flex-1 px-10 pb-24 pt-6">
            <h2 className="font-medium text-4xl">Products</h2>

            <div className="pb-24 pt-6 flex space-x-5 w-full">
              <div className="h-36 flex-1 px-4 pt-2 space-y-5 border shadow-md shadow-gray-600">
                <div className="text-2xl font-medium text-center">
                  Total Orders
                </div>
                <div className="text-6xl font-thin text-center">
                  {totalOrders}
                </div>
              </div>
              <div className="h-36 flex-1 px-4 pt-2 space-y-5 border shadow-md shadow-gray-600">
                <div className="text-2xl font-medium text-center">
                  Total Sales
                </div>
                <div className="text-6xl font-thin text-center">
                  ${totalSales}
                </div>
              </div>
            </div>
          </section>
        </div>
      </NavBar>
    </div>
  );
};

export default AdminAnalysis;
