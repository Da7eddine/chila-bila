import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProfileImg from '../../image/profile.png';

const UserAnnouncementDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { announcementId } = location.state;

  const announcements = [
    {
      id: 1,
      image: 'https://media.ed.edmunds-media.com/ford/f-150/2024/oem/2024_ford_f-150_crew-cab-pickup_lariat_fq_oem_1_1600.jpg',
      title: 'Car Model',
      description: "The Ford F-150 offers the best attributes of a modern pickup: power, efficiency, comfort, and capability. Add to that a huge range of configurations and options, and you've got a highly appealing light-duty pickup.",
      username: "John Doe",
      location: "New York",
      phone: "123456789",
      category: "Cars",
      price: "150,000 TND"
    },
    {
      id: 2,
      image: 'https://media.ed.edmunds-media.com/ford/f-150/2024/oem/2024_ford_f-150_crew-cab-pickup_platinum_fq_oem_2_815x543.jpg',
      title: 'Car Model',
      description: "The Ford F-150 offers the best attributes of a modern pickup: power, efficiency, comfort, and capability. Add to that a huge range of configurations and options, and you've got a highly appealing light-duty pickup.",
      username: "Jane Smith",
      location: "Los Angeles",
      phone: "987654321",
      category: "Cars",
      price: "160,000 TND"
    },
    {
      id: 3,
      image: 'https://media.ed.edmunds-media.com/ford/f-150/2024/oem/2024_ford_f-150_crew-cab-pickup_tremor_fq_oem_1_815x543.jpg',
      title: 'Car Model',
      description: "The Ford F-150 offers the best attributes of a modern pickup: power, efficiency, comfort, and capability. Add to that a huge range of configurations and options, and you've got a highly appealing light-duty pickup.",
      username: "Alice Johnson",
      location: "Chicago",
      phone: "555123456",
      category: "Cars",
      price: "170,000 TND"
    },
    {
      id: 4,
      image: 'https://media.ed.edmunds-media.com/ford/f-150/2024/oem/2024_ford_f-150_crew-cab-pickup_raptor_fq_oem_1_815x543.jpg',
      title: 'Car Model',
      description: "The Ford F-150 offers the best attributes of a modern pickup: power, efficiency, comfort, and capability. Add to that a huge range of configurations and options, and you've got a highly appealing light-duty pickup.",
      username: "Bob Brown",
      location: "Houston",
      phone: "666987654",
      category: "Cars",
      price: "180,000 TND"
    }
  ];

  const announcement = announcements.find(ele=> ele.id === announcementId);


  const handleUpdate = () => {
    navigate("/update-announcement", { state: { announcement } });
  };

  const handleDelete = () => {
    // here is the logic of deleting the announce
    navigate("/my-announcement");
  };

  return (
    <div className="p-4 flex gap-10 ml-10">
      <div className="images flex items-start justify-start max-w-96 h-96  rounded-xl">
        <img src={announcement.image} alt="" className="" />
      </div>
      <div className="annouc-details mt-6 bg-slate-100 rounded-xl p-4">
        <div className="user-profile flex items-center gap-2 mb-4">
          <img src={ProfileImg} alt="" className="h-20" />
          <div className="userinfo">
            <h5 className="user-name font-medium">{announcement.username}</h5>
            <p className="user-location text-sm">{announcement.location}</p>
          </div>
          <h5 className="ml-6 text-sm">📞 Phone: {announcement.phone}</h5>
        </div>
        <div className="annoucdetais">
          <h5 className="annouc-title font-bold text-lg ml-4 mt-6">{announcement.title}</h5>
          <h5 className="price font-bold ml-4 mt-4">{announcement.price}</h5>
          <div className="user-loc-cat ml-4 mt-4">
            <h6 className="text-sm">◈ {announcement.category}</h6>
            <h6 className="text-sm">📌 {announcement.location}</h6>
          </div>
          <div className="description">
            <h5 className="font-medium ml-4 mt-4">Description:</h5>
            <p className="ml-4 mt-2">{announcement.description}</p>
          </div>
          <div className="flex gap-4 ml-4 mt-4">
            <button
              className="bg-[#ff385c] text-white p-3 rounded-md hover:bg-[#fe4869]"
              onClick={handleUpdate}
            >
              Update
            </button>
            <button
              className="bg-[#ff385c] text-white p-3 rounded-md hover:bg-[#fe4869]"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAnnouncementDetail;
