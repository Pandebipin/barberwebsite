import React, { useEffect, useState } from "react";
import AdminCard from "../../components/AdminCard/AdminCard";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { useDispatch, useSelector } from "react-redux";
import { Alldata, fetchAlldata } from "../../Store/DataSlice";
import { useNavigate } from "react-router-dom";
import DataGraph from "../../components/DataGraph/DataGraph";
import DashboardData from "../../components/DashboardUserdata/DashboardData";
function AdminDashboard() {
  const [state, setState] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   let status = "";

  const navigation = () => {
    navigate("/");
  };
  useEffect(() => {
    dispatch(fetchAlldata());
  }, [dispatch]);

  const data = useSelector(Alldata);
  const date = new Date();
  const currentMonth = date.getMonth();
  const currentYear = date.getYear();

  const monthlyAppointments = data.map((item) => {
    const date = new Date(item.date);
    return date.getMonth() == currentMonth && date.getYear() === currentYear;
  });

  const monthlyCount = monthlyAppointments.length;

  const totalCount = data.length;
  const approvedCount = data.filter(
    (item) => item.status === "approved"
  ).length;
  const pendingCount = data.filter((item) => item.status === "pending").length;

  return (
    <div className="min-h-[100vh] bg-[#F9FAFB] py-2">
      <div className="first-shell flex justify-between items-center ">
        <div className="left">
          <span
            onClick={navigation}
            className="cursor-pointer text-gray-600 text-lg px-4 md:ml-[16px] py-2"
          >
            {" "}
            &larr; Back to website
          </span>
          <h1 className="text-3xl px-4 md:font-bold font-sans whitespace-normal md:ml-[16px]">
            Admin Dashboard
          </h1>
        </div>

        <div className="right pr-4">
          <button
            onClick={navigation}
            className="bg-[#F8802B] sm:mr-[2px]  whitespace-nowrap px-4 py-2 rounded-lg text-gray-50"
          >
            Return to site
          </button>
        </div>
      </div>

      <div className="main mt-5 px-8 py-1 flex flex-col gap-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="first bg-[#FFFFFF] w-[250px] xl:w-[400px] md:w-[300px] py-6 px-6  border border-gray-200  rounded-lg shadow-sm">
            <h1>Total Appointments</h1>
            <span className="text-3xl font-semibold text-gray-900">
              {totalCount}
            </span>
            <p className="text-sm mt-1 text-gray-600 ">All time appointments</p>
          </div>
          <div className="first bg-[#FFFFFF] w-[250px] xl:w-[400px] md:w-[300px] py-6 px-6  border border-gray-200  rounded-lg shadow-sm">
            <h1>Pending Approval</h1>
            <span className="text-3xl font-semibold text-gray-900">
              {pendingCount}
            </span>
            <p className="text-gray-700">All time appointments</p>
          </div>
          <div className="first bg-[#FFFFFF] w-[250px] xl:w-[400px] md:w-[300px] py-6 px-6  border border-gray-200  rounded-lg shadow-sm">
            <h1>Approved</h1>
            <span className="text-3xl font-semibold text-gray-900">
              {approvedCount}
            </span>
            <p className="text-gray-700">All time appointments</p>
          </div>
        </div>

        {/* //datagraph */}
        <div className="py-4">
          <DataGraph monthlyCount={monthlyCount} />
        </div>

        <div className="flex space-x-3">
          <button className="px-4 py-2 text-gray-900 font-semibold rounded-md text-sm">
            Appointments
          </button>
          <button className="px-4 py-2 bg-white text-gray-500 font-semibold border border-gray-300 rounded-md text-sm">
            Settings
          </button>
        </div>
        <h1 className="text-3xl font-bold px-2">Appointments</h1>
        <div className="slide bg-[#F5F5F5] flex gap-3 rounded-md w-full h-[40px] p-1 shadow-sm border border-gray-200">
          <div
            onClick={() => setState(0)}
            className={`w-[35%] flex items-center justify-center rounded-md border border-gray-200 text-sm font-medium cursor-pointer transition
      ${
        state === 0
          ? "bg-white text-gray-700 shadow-sm"
          : "text-gray-600 hover:bg-gray-100"
      }`}
          >
            All
          </div>
          <div
            onClick={() => setState(1)}
            className={`w-[35%] flex items-center justify-center rounded-md border border-gray-200 text-sm font-medium cursor-pointer transition
      ${
        state === 1
          ? "bg-white text-orange-600 shadow-sm"
          : "text-gray-600 hover:bg-gray-100"
      }`}
          >
            Pending
          </div>
          <div
            onClick={() => setState(2)}
            className={`w-[35%] flex items-center justify-center rounded-md border border-gray-200 text-sm font-medium cursor-pointer transition
      ${
        state === 2
          ? "bg-white text-green-600 shadow-sm"
          : "text-gray-600 hover:bg-gray-100"
      }`}
          >
            Approved
          </div>
        </div>
        {state == 0 && (
          <div className="hidden grid-cols-1 md:grid-cols-2 gap-6">
            {data?.map((elem) => {
              return (
                <AdminCard
                  key={elem.id}
                  name={elem.name}
                  time={elem.timeSlot}
                  date={elem.date}
                  email={elem.email}
                  status={elem.status}
                  id={elem.docId}
                />
              );
            })}
          </div>
        )}
        {state === 1 && (
          <>
            {data?.filter((elem) => elem.status === "pending").length === 0 ? (
              <div className="bg-[#FFFFFF] h-[200px] w-full flex flex-col py-4 rounded-md border border-gray-200 justify-center items-center">
                <CalendarTodayIcon className="text-gray-500 mb-2" />

                <h1 className="text-lg text-gray-800 capitalize">
                  no appointment avaliable
                </h1>
                <p className="text-lg text-gray-600">
                  There are no pending availables
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data
                  ?.filter((elem) => elem.status === "pending")
                  .map((elem) => {
                    return (
                      <AdminCard
                        key={elem.id}
                        name={elem.name}
                        time={elem.timeSlot}
                        date={elem.date}
                        email={elem.email}
                        status={elem.status}
                        id={elem.docId}
                      />
                    );
                  })}
              </div>
            )}
          </>
        )}
        {state === 2 && (
          <>
            {data?.filter((elem) => elem.status === "approved").length === 0 ? (
              <div className="bg-[#FFFFFF] h-[200px] w-full flex flex-col py-4 rounded-md border border-gray-200 justify-center items-center">
                <CalendarTodayIcon className="text-gray-500 mb-2" />

                <h1 className="text-lg text-gray-800 capitalize">
                  no appointment avaliable
                </h1>
                <p className="text-lg text-gray-600">
                  There are no pending availables
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data
                  ?.filter((elem) => elem.status === "approved")
                  .map((elem) => {
                    return (
                      <AdminCard
                        key={elem.id}
                        name={elem.name}
                        time={elem.timeSlot}
                        date={elem.date}
                        email={elem.email}
                        status={elem.status}
                        id={elem.docId}
                      />
                    );
                  })}
              </div>
            )}
          </>
        )}
      </div>

      {/* <DashboardData /> */}
    </div>
  );
}

export default AdminDashboard;
