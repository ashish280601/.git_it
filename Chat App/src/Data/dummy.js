const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // January is 0, so we add 1
const day = currentDate.getDate();

const recentDay = `${year}-${month < 10 ? "0" + month : month}-${
  day < 10 ? "0" + day : day
}`;

const user = [
  {
    id: 1,
    userImg:
      "https://source.boomplaymusic.com/group10/M00/07/17/6a63af178571419a97d80fdb383f843e_464_464.jpg",
    name: "Kanhaiya Laal",
    mode: "Online",
    message1: {
      sender: "Hey Ashish, How you doing?",
      you: "Well Good and health, I hope you are also doing well.",
    },
    message2: {
      sender: "Good, Are you going to come tomorrow for holi celebration ?",
      you: "OffCourse yes!!, I am attending holi tommorrow",
    },
    message3: {
      sender:
        "There is an  party in my house so I am inviting to you at my hourse",
      sender:
        "https://i.pinimg.com/originals/df/20/5c/df205c78053bf1bf5b0a9fbf1d9726a0.jpg",
      you: "Thanks for your invitation",
    },
    message4: {
      sender:
        "See you tommorrow, I had to visit some family member home to give invitation card",
      you: "Ok Bye, have a good day take care of your and your love ones.",
    },
    you: {
      name: "Ashish Mehra",
      img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149662.png",
    },
    duration: {
      day: recentDay,
      time: "Recent",
    },
    lastmessage:
      "Ok Bye, have a good day take care of your and your love ones.",
    you: {
      name: "Ashish Mehra",
      img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149662.png",
    },
  },
  {
    id: 2,
    userImg:
      "https://preview.pichforest.com/dashonic/layouts/assets/images/users/avatar-3.jpg",
    name: "Preeti Das",
    mode: "Offline",
    message1: {
      sender: "Hey Ashish, How you doing?",
      you: "Well Good and health, I hope you are also doing well.",
    },
    message2: {
      sender: "Good, Are you going to come tomorrow for holi celebration ?",
      you: "OffCourse yes!!, I am attending holi tommorrow",
    },
    message3: {
      sender:
        "There is an  party in my house so I am inviting to you at my hourse",
      sender:
        "https://i.pinimg.com/originals/df/20/5c/df205c78053bf1bf5b0a9fbf1d9726a0.jpg",
      you: "Thanks for your invitation",
    },
    message4: {
      sender:
        "See you tommorrow, I had to visit some family member home to give invitation card",
      you: "Ok Bye, have a good day take care of your and your love ones.",
    },
    you: {
      name: "Ashish Mehra",
      img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149662.png",
    },
    duration: {
      day: recentDay,
      time: "Recent",
    },
    lastmessage:
      "Ok Bye, have a good day take care of your and your love ones.",
    you: {
      name: "Ashish Mehra",
      img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149662.png",
    },
  },
  {
    id: 3,
    userImg:
      "https://www.pngitem.com/pimgs/m/277-2778082_bramble-bear-making-fists-bablu-dablu-photo-download.png",
    name: "Bablu",
    mode: "Offline",
    message1: {
      sender: "Hey Ashish, How you doing?",
      you: "Well Good and health, I hope you are also doing well.",
    },
    message2: {
      sender: "Good, Are you going to come tomorrow for holi celebration ?",
      you: "OffCourse yes!!, I am attending holi tommorrow",
    },
    message3: {
      sender:
        "There is an  party in my house so I am inviting to you at my hourse",
      sender:
        "https://i.pinimg.com/originals/df/20/5c/df205c78053bf1bf5b0a9fbf1d9726a0.jpg",
      you: "Thanks for your invitation",
    },
    message4: {
      sender:
        "See you tommorrow, I had to visit some family member home to give invitation card",
      you: "Ok Bye, have a good day take care of your and your love ones.",
    },
    duration: {
      day: recentDay,
      time: "Recent",
    },
    lastmessage:
      "Ok Bye, have a good day take care of your and your love ones.",
    you: {
      name: "Ashish Mehra",
      img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149662.png",
    },
  },
  {
    id: 4,
    userImg:
      "https://img.freepik.com/premium-vector/portrait-queen-vanvasi-sita-seeta_156779-828.jpg",
    name: "Seeta Pal",
    mode: "Online",
    message1: {
      sender: "Hey Ashish, How you doing?",
      you: "Well Good and health, I hope you are also doing well.",
    },
    message2: {
      sender: "Good, Are you going to come tomorrow for holi celebration ?",
      you: "OffCourse yes!!, I am attending holi tommorrow",
    },
    message3: {
      sender:
        "There is an  party in my house so I am inviting to you at my hourse",
      sender:
        "https://i.pinimg.com/originals/df/20/5c/df205c78053bf1bf5b0a9fbf1d9726a0.jpg",
      you: "Thanks for your invitation",
    },
    message4: {
      sender:
        "See you tommorrow, I had to visit some family member home to give invitation card",
      you: "Ok Bye, have a good day take care of your and your love ones.",
    },
    duration: {
      day: recentDay,
      time: "Recent",
    },
    lastmessage:
      "Ok Bye, have a good day take care of your and your love ones.",
    you: {
      name: "Ashish Mehra",
      img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149662.png",
    },
  },
  {
    id: 5,
    userImg:
      "https://imgeng.jagran.com/images/2022/oct/MaaGauriNavratri1664764822178.jpg",
    name: "Gauri Figma",
    mode: "Online",
    message1: {
      sender: "Hey Ashish, How you doing?",
      you: "Well Good and health, I hope you are also doing well.",
    },
    message2: {
      sender: "Good, Are you going to come tomorrow for holi celebration ?",
      you: "OffCourse yes!!, I am attending holi tommorrow",
    },
    message3: {
      sender:
        "There is an  party in my house so I am inviting to you at my hourse",
      sender:
        "https://i.pinimg.com/originals/df/20/5c/df205c78053bf1bf5b0a9fbf1d9726a0.jpg",
      you: "Thanks for your invitation",
    },
    message4: {
      sender:
        "See you tommorrow, I had to visit some family member home to give invitation card",
      you: "Ok Bye, have a good day take care of your and your love ones.",
    },
    duration: {
      day: recentDay,
      time: "10:30 PM",
    },
    lastmessage:
      "Ok Bye, have a good day take care of your and your love ones.",
    you: {
      name: "Ashish Mehra",
      img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149662.png",
    },
  },
  {
    id: 6,
    userImg:
      "https://preview.pichforest.com/dashonic/layouts/assets/images/users/avatar-2.jpg",
    name: "Abhishek",
    mode: "Offline",
    message1: {
      sender: "Hey Ashish, How you doing?",
      you: "Well Good and health, I hope you are also doing well.",
    },
    message2: {
      sender: "Good, Are you going to come tomorrow for holi celebration ?",
      you: "OffCourse yes!!, I am attending holi tommorrow",
    },
    message3: {
      sender:
        "There is an  party in my house so I am inviting to you at my hourse",
      sender:
        "https://i.pinimg.com/originals/df/20/5c/df205c78053bf1bf5b0a9fbf1d9726a0.jpg",
      you: "Thanks for your invitation",
    },
    message4: {
      sender:
        "See you tommorrow, I had to visit some family member home to give invitation card",
      you: "Ok Bye, have a good day take care of your and your love ones.",
    },
    duration: {
      day: recentDay,
      time: "10:30 PM",
    },
    lastmessage:
      "Ok Bye, have a good day take care of your and your love ones.",
    you: {
      name: "Ashish Mehra",
      img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149662.png",
    },
  },
  {
    id: 7,
    userImg:
      "https://preview.pichforest.com/dashonic/layouts/assets/images/users/avatar-2.jpg",
    name: "Pranav",
    mode: "Online",
    message1: {
      sender: "Hey Ashish, How you doing?",
      you: "Well Good and health, I hope you are also doing well.",
    },
    message2: {
      sender: "Good, Are you going to come tomorrow for holi celebration ?",
      you: "OffCourse yes!!, I am attending holi tommorrow",
    },
    message3: {
      sender:
        "There is an  party in my house so I am inviting to you at my hourse",
      sender:
        "https://i.pinimg.com/originals/df/20/5c/df205c78053bf1bf5b0a9fbf1d9726a0.jpg",
      you: "Thanks for your invitation",
    },
    message4: {
      sender:
        "See you tommorrow, I had to visit some family member home to give invitation card",
      you: "Ok Bye, have a good day take care of your and your love ones.",
    },
    duration: {
      day: "Thu",
      time: "9:57 AM",
    },
    lastmessage:
      "Ok Bye, have a good day take care of your and your love ones.",
    you: {
      name: "Ashish Mehra",
      img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149662.png",
    },
  },
  {
    id: 8,
    userImg:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg",
    name: "Neelam",
    mode: "Offline",
    message1: {
      sender: "Hey Ashish, How you doing?",
      you: "Well Good and health, I hope you are also doing well.",
    },
    message2: {
      sender: "Good, Are you going to come tomorrow for holi celebration ?",
      you: "OffCourse yes!!, I am attending holi tommorrow",
    },
    message3: {
      sender:
        "There is an  party in my house so I am inviting to you at my hourse",
      sender:
        "https://i.pinimg.com/originals/df/20/5c/df205c78053bf1bf5b0a9fbf1d9726a0.jpg",
      you: "Thanks for your invitation",
    },
    message4: {
      sender:
        "See you tommorrow, I had to visit some family member home to give invitation card",
      you: "Ok Bye, have a good day take care of your and your love ones.",
    },
    duration: {
      day: "Thu",
      time: "9:57 PM",
    },
    lastmessage:
      "Ok Bye, have a good day take care of your and your love ones.",
    you: {
      name: "Ashish Mehra",
      img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149662.png",
    },
  },
  {
    id: 9,
    userImg: "https://img.freepik.com/free-photo/artist-white_1368-3543.jpg",
    name: "Vijay Pandey",
    mode: "Online",
    message1: {
      sender: "Hey Ashish, How you doing?",
      you: "Well Good and health, I hope you are also doing well.",
    },
    message2: {
      sender: "Good, Are you going to come tomorrow for holi celebration ?",
      you: "OffCourse yes!!, I am attending holi tommorrow",
    },
    message3: {
      sender:
        "There is an  party in my house so I am inviting to you at my hourse",
      sender:
        "https://i.pinimg.com/originals/df/20/5c/df205c78053bf1bf5b0a9fbf1d9726a0.jpg",
      you: "Thanks for your invitation",
    },
    message4: {
      sender:
        "See you tommorrow, I had to visit some family member home to give invitation card",
      you: "Ok Bye, have a good day take care of your and your love ones.",
    },
    duration: {
      day: "Thu",
      time: "9:57 PM",
    },
    lastmessage:
      "Ok Bye, have a good day take care of your and your love ones.",
    you: {
      name: "Ashish Mehra",
      img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149662.png",
    },
  },
  {
    id: 10,
    userImg:
      "https://cdn.pixabay.com/photo/2018/10/29/21/46/human-3782189_640.jpg",
    name: "Mohit Negi",
    mode: "Online",
    message1: {
      sender: "Hey Ashish, How you doing?",
      you: "Well Good and health, I hope you are also doing well.",
    },
    message2: {
      sender: "Good, Are you going to come tomorrow for holi celebration ?",
      you: "OffCourse yes!!, I am attending holi tommorrow",
    },
    message3: {
      sender:
        "There is an  party in my house so I am inviting to you at my hourse",
      sender:
        "https://i.pinimg.com/originals/df/20/5c/df205c78053bf1bf5b0a9fbf1d9726a0.jpg",
      you: "Thanks for your invitation",
    },
    message4: {
      sender:
        "See you tommorrow, I had to visit some family member home to give invitation card",
      you: "Ok Bye, have a good day take care of your and your love ones.",
    },
    duration: {
      day: "Fri",
      time: "2:00 PM",
    },
    lastmessage:
      "Ok Bye, have a good day take care of your and your love ones.",
  },
  {
    id: 11,
    userImg:
      "https://img.freepik.com/free-photo/indian-man-smiling-cheerful-expression-closeup-portrait_53876-129387.jpg",
    name: "Gaurav Lasyal",
    mode: "Online",
    message1: {
      sender: "Hey Ashish, How you doing?",
      you: "Well Good and health, I hope you are also doing well.",
    },
    message2: {
      sender: "Good, Are you going to come tomorrow for holi celebration ?",
      you: "OffCourse yes!!, I am attending holi tommorrow",
    },
    message3: {
      sender:
        "There is an  party in my house so I am inviting to you at my hourse",
      sender:
        "https://i.pinimg.com/originals/df/20/5c/df205c78053bf1bf5b0a9fbf1d9726a0.jpg",
      you: "Thanks for your invitation",
    },
    message4: {
      sender:
        "See you tommorrow, I had to visit some family member home to give invitation card",
      you: "Ok Bye, have a good day take care of your and your love ones.",
    },
    duration: {
      day: "Fri",
      time: "12:30 AM",
    },
    lastmessage:
      "Ok Bye, have a good day take care of your and your love ones.",
    you: {
      name: "Ashish Mehra",
      img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149662.png",
    },
  },
  {
    id: 12,
    userImg:
      "https://img.freepik.com/free-photo/timid-satisfied-european-man-crosses-hands-chest_273609-45710.jpg",
    name: "Vivek",
    mode: "Offline",
    message1: {
      sender: "Hey Ashish, How you doing?",
      Ashish: "Well Good and health, I hope you are also doing well.",
    },
    message2: {
      sender: "Good, Are you going to come tomorrow for holi celebration ?",
      you: "OffCourse yes!!, I am attending holi tommorrow",
    },
    message3: {
      sender:
        "There is an  party in my house so I am inviting to you at my hourse",
      sender:
        "https://i.pinimg.com/originals/df/20/5c/df205c78053bf1bf5b0a9fbf1d9726a0.jpg",
      you: "Thanks for your invitation",
    },
    message4: {
      sender:
        "See you tommorrow, I had to visit some family member home to give invitation card",
      you: "Ok Bye, have a good day take care of your and your love ones.",
    },
    duration: {
      day: "Mon",
      time: "10:10 AM",
    },
    lastmessage:
      "Ok Bye, have a good day take care of your and your love ones.",
    you: {
      name: "Ashish Mehra",
      img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149662.png",
    },
  },
  {
    id: 13,
    userImg:
      "https://www.shutterstock.com/image-photo/man-laughing-orange-studio-close-260nw-575236939.jpg",
    name: "Sahil Bisht",
    mode: "Offline",
    message1: {
      sender: "Hey Ashish, How you doing?",
      you: "Well Good and health, I hope you are also doing well.",
    },
    message2: {
      sender: "Good, Are you going to come tomorrow for holi celebration ?",
      you: "OffCourse yes!!, I am attending holi tommorrow",
    },
    message3: {
      sender:
        "There is an  party in my house so I am inviting to you at my hourse",
      sender:
        "https://i.pinimg.com/originals/df/20/5c/df205c78053bf1bf5b0a9fbf1d9726a0.jpg",
      you: "Thanks for your invitation",
    },
    message4: {
      sender:
        "See you tommorrow, I had to visit some family member home to give invitation card",
      you: "Ok Bye, have a good day take care of your and your love ones.",
    },
    duration: {
      day: "Mon",
      time: "10:15 AM",
    },
    lastmessage:
      "Ok Bye, have a good day take care of your and your love ones.",
    you: {
      name: "Ashish Mehra",
      img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149662.png",
    },
  },
  {
    id: 14,
    userImg:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-733872.jpg&fm=jpg",
    name: "Kanchan Negi",
    mode: "Offline",
    message1: {
      sender: "Hey Ashish, How you doing?",
      you: "Well Good and health, I hope you are also doing well.",
    },
    message2: {
      sender: "Good, Are you going to come tomorrow for holi celebration ?",
      you: "OffCourse yes!!, I am attending holi tommorrow",
    },
    message3: {
      sender:
        "There is an  party in my house so I am inviting to you at my hourse",
      sender:
        "https://i.pinimg.com/originals/df/20/5c/df205c78053bf1bf5b0a9fbf1d9726a0.jpg",
      you: "Thanks for your invitation",
    },
    message4: {
      sender:
        "See you tommorrow, I had to visit some family member home to give invitation card",
      you: "Ok Bye, have a good day take care of your and your love ones.",
    },
    duration: {
      day: "Mon",
      time: "11:30 AM",
    },
    lastmessage:
      "Ok Bye, have a good day take care of your and your love ones.",
    you: {
      name: "Ashish Mehra",
      img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149662.png",
    },
  },
  {
    id: 15,
    userImg:
      "https://thumbs.wbm.im/pw/small/d83d70f88483f71517aaee0e4d59bc18.jpg",
    name: "Nepali",
    mode: "Online",
    message1: {
      sender: "Hey Ashish, How you doing?",
      you: "Well Good and health, I hope you are also doing well.",
    },
    message2: {
      sender: "Good, Are you going to come tomorrow for holi celebration ?",
      you: "OffCourse yes!!, I am attending holi tommorrow",
    },
    message3: {
      sender:
        "There is an  party in my house so I am inviting to you at my hourse",
      sender:
        "https://i.pinimg.com/originals/df/20/5c/df205c78053bf1bf5b0a9fbf1d9726a0.jpg",
      you: "Thanks for your invitation",
    },
    message4: {
      sender:
        "See you tommorrow, I had to visit some family member home to give invitation card",
      you: "Ok Bye, have a good day take care of your and your love ones.",
    },
    duration: {
      day: "Mon",
      time: "4:15 PM",
    },
    lastmessage:
      "Ok Bye, have a good day take care of your and your love ones.",
    you: {
      name: "Ashish Mehra",
      img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149662.png",
    },
  },
  {
    id: 16,
    userImg:
      "https://jooinn.com/images/selective-focus-photo-of-woman-wearing-knitted-blue-and-black-top.jpg",
    name: "Khushi Rana",
    mode: "Online",
    message1: {
      sender: "Hey Ashish, How you doing?",
      you: "Well Good and health, I hope you are also doing well.",
    },
    message2: {
      sender: "Good, Are you going to come tomorrow for holi celebration ?",
      you: "OffCourse yes!!, I am attending holi tommorrow",
    },
    message3: {
      sender:
        "There is an  party in my house so I am inviting to you at my hourse",
      sender:
        "https://i.pinimg.com/originals/df/20/5c/df205c78053bf1bf5b0a9fbf1d9726a0.jpg",
      you: "Thanks for your invitation",
    },
    message4: {
      sender:
        "See you tommorrow, I had to visit some family member home to give invitation card",
      you: "Ok Bye, have a good day take care of your and your love ones.",
    },
    duration: {
      day: "Tue",
      time: "1:30 PM",
    },
    lastmessage:
      "Ok Bye, have a good day take care of your and your love ones.",
    you: {
      name: "Ashish Mehra",
      img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149662.png",
    },
  },
  {
    id: 17,
    userImg:
      "https://images.unsplash.com/photo-1508275733916-9efbadc2a32d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Darling",
    mode: "Online",
    message1: {
      sender: "Hey Ashish, How you doing?",
      you: "Well Good and health, I hope you are also doing well.",
    },
    message2: {
      sender: "Good, Are you going to come tomorrow for holi celebration ?",
      you: "OffCourse yes!!, I am attending holi tommorrow",
    },
    message3: {
      sender:
        "There is an  party in my house so I am inviting to you at my hourse",
      sender:
        "https://i.pinimg.com/originals/df/20/5c/df205c78053bf1bf5b0a9fbf1d9726a0.jpg",
      you: "Thanks for your invitation",
    },
    message4: {
      sender:
        "See you tommorrow, I had to visit some family member home to give invitation card",
      you: "Ok Bye, have a good day take care of your and your love ones.",
    },
    duration: {
      day: "Tue",
      time: "5:25 PM",
    },
    lastmessage:
      "Ok Bye, have a good day take care of your and your love ones.",
    you: {
      name: "Ashish Mehra",
      img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149662.png",
    },
  },
  {
    id: 18,
    userImg:
      "https://images.unsplash.com/photo-1614477323662-66300f4e033c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Jyoti Mehra",
    mode: "Offline",
    message1: {
      sender: "Hey Ashish, How you doing?",
      you: "Well Good and health, I hope you are also doing well.",
    },
    message2: {
      sender: "Good, Are you going to come tomorrow for holi celebration ?",
      you: "OffCourse yes!!, I am attending holi tommorrow",
    },
    message3: {
      sender:
        "There is an  party in my house so I am inviting to you at my hourse",
      sender:
        "https://i.pinimg.com/originals/df/20/5c/df205c78053bf1bf5b0a9fbf1d9726a0.jpg",
      you: "Thanks for your invitation",
    },
    message4: {
      sender:
        "See you tommorrow, I had to visit some family member home to give invitation card",
      you: "Ok Bye, have a good day take care of your and your love ones.",
    },
    duration: {
      day: "Tue",
      time: "9:00 PM",
    },
    lastmessage:
      "Ok Bye, have a good day take care of your and your love ones.",
    you: {
      name: "Ashish Mehra",
      img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149662.png",
    },
  },
  {
    id: 19,
    userImg:
      "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aHVtYW58ZW58MHx8MHx8fDA%3D",
    name: "Ajay",
    mode: "Offline",
    message1: {
      sender: "Hey Ashish, How you doing?",
      you: "Well Good and health, I hope you are also doing well.",
    },
    message2: {
      sender: "Good, Are you going to come tomorrow for holi celebration ?",
      you: "OffCourse yes!!, I am attending holi tommorrow",
    },
    message3: {
      sender:
        "There is an  party in my house so I am inviting to you at my hourse",
      sender:
        "https://i.pinimg.com/originals/df/20/5c/df205c78053bf1bf5b0a9fbf1d9726a0.jpg",
      you: "Thanks for your invitation",
    },
    message4: {
      sender:
        "See you tommorrow, I had to visit some family member home to give invitation card",
      you: "Ok Bye, have a good day take care of your and your love ones.",
    },
    duration: {
      day: "Mon",
      time: "10:15 AM",
    },
    lastmessage:
      "Ok Bye, have a good day take care of your and your love ones.",
    you: {
      name: "Ashish Mehra",
      img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149662.png",
    },
  },
  {
    id: 20,
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLRqzztwETm5fJuI11YJLmQM_e8WVxLjmr49RNR32zpFzLmzpRRiVV9mhKeRZ2ypFdf8g&usqp=CAU",
    name: "Laxman Singh",
    mode: "Offline",
    message1: {
      sender: "Hey Ashish, How you doing?",
      you: "Well Good and health, I hope you are also doing well.",
    },
    message2: {
      sender: "Good, Are you going to come tomorrow for holi celebration ?",
      you: "OffCourse yes!!, I am attending holi tommorrow",
    },
    message3: {
      sender:
        "There is an  party in my house so I am inviting to you at my hourse",
      sender:
        "https://i.pinimg.com/originals/df/20/5c/df205c78053bf1bf5b0a9fbf1d9726a0.jpg",
      you: "Thanks for your invitation",
    },
    message4: {
      sender:
        "See you tommorrow, I had to visit some family member home to give invitation card",
      you: "Ok Bye, have a good day take care of your and your love ones.",
    },
    duration: {
      day: "Mon",
      time: "10:15 AM",
    },
    lastmessage:
      "Ok Bye, have a good day take care of your and your love ones.",
    you: {
      name: "Ashish Mehra",
      img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149662.png",
    },
  },
  {
    id: 21,
    userImg:
      "https://media.istockphoto.com/id/1022174472/photo/casual-dressed-young-man-in-white-t-shirt-shouting-oh-my-god-with-open-mouth-surprised-by-low.jpg?s=612x612&w=0&k=20&c=LuWFGIsXUZ5MWc_no_bjYmOwfd_DrtjOowCncGgrf8g=",
    name: "Om Panda",
    mode: "Offline",
    message1: {
      sender: "Hey Ashish, How you doing?",
      you: "Well Good and health, I hope you are also doing well.",
    },
    message2: {
      sender: "Good, Are you going to come tomorrow for holi celebration ?",
      you: "OffCourse yes!!, I am attending holi tommorrow",
    },
    message3: {
      sender:
        "There is an  party in my house so I am inviting to you at my hourse",
      sender:
        "https://i.pinimg.com/originals/df/20/5c/df205c78053bf1bf5b0a9fbf1d9726a0.jpg",
      you: "Thanks for your invitation",
    },
    message4: {
      sender:
        "See you tommorrow, I had to visit some family member home to give invitation card",
      you: "Ok Bye, have a good day take care of your and your love ones.",
    },
    duration: {
      day: "Mon",
      time: "10:15 AM",
    },
    lastmessage:
      "Ok Bye, have a good day take care of your and your love ones.",
    you: {
      name: "Ashish Mehra",
      img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149662.png",
    },
  },
  {
    id: 22,
    userImg:
      "https://media.istockphoto.com/id/831987528/photo/dude-disapproves.jpg?s=612x612&w=0&k=20&c=yBqLv63K2h1yCgNDvcTbWl7zKLLBZfzEKYHEuSIbIdQ=",
    name: "Vikas Gupta",
    mode: "Online",
    message1: {
      sender: "Hey Ashish, How you doing?",
      you: "Well Good and health, I hope you are also doing well.",
    },
    message2: {
      sender: "Good, Are you going to come tomorrow for holi celebration ?",
      you: "OffCourse yes!!, I am attending holi tommorrow",
    },
    message3: {
      sender:
        "There is an  party in my house so I am inviting to you at my hourse",
      sender:
        "https://i.pinimg.com/originals/df/20/5c/df205c78053bf1bf5b0a9fbf1d9726a0.jpg",
      you: "Thanks for your invitation",
    },
    message4: {
      sender:
        "See you tommorrow, I had to visit some family member home to give invitation card",
      you: "Ok Bye, have a good day take care of your and your love ones.",
    },
    duration: {
      day: "Mon",
      time: "10:15 AM",
    },
    you: {
      name: "Ashish Mehra",
      img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149662.png",
    },
    lastmessage:
      "Ok Bye, have a good day take care of your and your love ones.",
  },
  {
    id: 23,
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT10p2nIGeFNg7DSoaUt0fWiN5s9MONzltbvkNgqP83ZmRnkap4gcs8hgG-jE3aKNRbDhE&usqp=CAU",
    name: "Kajal",
    mode: "Online",
    message1: {
      sender: "Hey Ashish, How you doing?",
      you: "Well Good and health, I hope you are also doing well.",
    },
    message2: {
      sender: "Good, Are you going to come tomorrow for holi celebration ?",
      you: "OffCourse yes!!, I am attending holi tommorrow",
    },
    message3: {
      sender:
        "There is an  party in my house so I am inviting to you at my hourse",
      sender:
        "https://i.pinimg.com/originals/df/20/5c/df205c78053bf1bf5b0a9fbf1d9726a0.jpg",
      you: "Thanks for your invitation",
    },
    message4: {
      sender:
        "See you tommorrow, I had to visit some family member home to give invitation card",
      you: "Ok Bye, have a good day take care of your and your love ones.",
    },
    you: {
      name: "Ashish Mehra",
      img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149662.png",
    },
    duration: {
      day: "Mon",
      time: "10:15 AM",
    },
    lastmessage:
      "Ok Bye, have a good day take care of your and your love ones.",
  },
  {
    id: 24,
    userImg:
      "https://img.freepik.com/free-photo/smiling-woman-with-clipboard_23-2147818401.jpg",
    name: "Ankita",
    mode: "Online",
    message1: {
      sender: "Hey Ashish, How you doing?",
      you: "Well Good and health, I hope you are also doing well.",
    },
    message2: {
      sender: "Good, Are you going to come tomorrow for holi celebration ?",
      you: "OffCourse yes!!, I am attending holi tommorrow",
    },
    message3: {
      sender:
        "There is an  party in my house so I am inviting to you at my hourse",
      sender:
        "https://i.pinimg.com/originals/df/20/5c/df205c78053bf1bf5b0a9fbf1d9726a0.jpg",
      you: "Thanks for your invitation",
    },
    message4: {
      sender:
        "See you tommorrow, I had to visit some family member home to give invitation card",
      you: "Ok Bye, have a good day take care of your and your love ones.",
    },
    you: {
      name: "Ashish Mehra",
      img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149662.png",
    },
    duration: {
      day: "Mon",
      time: "10:15 AM",
    },
    lastmessage:
      "Ok Bye, have a good day take care of your and your love ones.",
  },
  {
    id: 25,
    userImg:
      "https://plus.unsplash.com/premium_photo-1664203067979-47448934fd97?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8fDA%3D",
    name: "Rukma Rathore",
    mode: "Online",
    message1: {
      sender: "Hey Ashish, How you doing?",
      you: "Well Good and health, I hope you are also doing well.",
    },
    message2: {
      sender: "Good, Are you going to come tomorrow for holi celebration ?",
      you: "OffCourse yes!!, I am attending holi tommorrow",
    },
    message3: {
      sender:
        "There is an  party in my house so I am inviting to you at my hourse",
      sender:
        "https://i.pinimg.com/originals/df/20/5c/df205c78053bf1bf5b0a9fbf1d9726a0.jpg",
      you: "Thanks for your invitation",
    },
    message4: {
      sender:
        "See you tommorrow, I had to visit some family member home to give invitation card",
      you: "Ok Bye, have a good day take care of your and your love ones.",
    },
    you: {
      name: "Ashish Mehra",
      img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149662.png",
    },
    duration: {
      day: "Mon",
      time: "10:15 AM",
    },
    lastmessage:
      "Ok Bye, have a good day take care of your and your love ones.",
  },
  {
    id: 26,
    userImg:
      "https://burst.shopifycdn.com/photos/close-up-of-a-persons-face-looking-at-the-camera.jpg?width=1000&format=pjpg&exif=0&iptc=0",
    name: "Monika",
    mode: "Online",
    message1: {
      sender: "Hey Ashish, How you doing?",
      you: "Well Good and health, I hope you are also doing well.",
    },
    message2: {
      sender: "Good, Are you going to come tomorrow for holi celebration ?",
      you: "OffCourse yes!!, I am attending holi tommorrow",
    },
    message3: {
      sender:
        "There is an  party in my house so I am inviting to you at my hourse",
      sender:
        "https://i.pinimg.com/originals/df/20/5c/df205c78053bf1bf5b0a9fbf1d9726a0.jpg",
      you: "Thanks for your invitation",
    },
    message4: {
      sender:
        "See you tommorrow, I had to visit some family member home to give invitation card",
      you: "Ok Bye, have a good day take care of your and your love ones.",
    },
    you: {
      name: "Ashish Mehra",
      img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149662.png",
    },
    duration: {
      day: "Mon",
      time: "10:15 AM",
    },
    lastmessage:
      "Ok Bye, have a good day take care of your and your love ones.",
  },
  {
    id: 27,
    userImg:
      "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?cs=srgb&dl=pexels-spencer-selover-428364.jpg&fm=jpg",
    name: "Prem Bhaya",
    mode: "Offline",
    message1: {
      sender: "Hey Ashish, How you doing?",
      you: "Well Good and health, I hope you are also doing well.",
    },
    message2: {
      sender: "Good, Are you going to come tomorrow for holi celebration ?",
      you: "OffCourse yes!!, I am attending holi tommorrow",
    },
    message3: {
      sender:
        "There is an  party in my house so I am inviting to you at my hourse",
      sender:
        "https://i.pinimg.com/originals/df/20/5c/df205c78053bf1bf5b0a9fbf1d9726a0.jpg",
      you: "Thanks for your invitation",
    },
    message4: {
      sender:
        "See you tommorrow, I had to visit some family member home to give invitation card",
      you: "Ok Bye, have a good day take care of your and your love ones.",
    },
    you: {
      name: "Ashish Mehra",
      img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149662.png",
    },
    duration: {
      day: "Mon",
      time: "10:15 AM",
    },
    lastmessage:
      "Ok Bye, have a good day take care of your and your love ones.",
  },
  {
    id: 28,
    userImg:
      "https://images.unsplash.com/photo-1624395213043-fa2e123b2656?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Ram",
    mode: "Online",
    message1: {
      sender: "Hey Ashish, How you doing?",
      you: "Well Good and health, I hope you are also doing well.",
    },
    message2: {
      sender: "Good, Are you going to come tomorrow for holi celebration ?",
      you: "OffCourse yes!!, I am attending holi tommorrow",
    },
    message3: {
      sender:
        "There is an  party in my house so I am inviting to you at my hourse",
      sender:
        "https://i.pinimg.com/originals/df/20/5c/df205c78053bf1bf5b0a9fbf1d9726a0.jpg",
      you: "Thanks for your invitation",
    },
    message4: {
      sender:
        "See you tommorrow, I had to visit some family member home to give invitation card",
      you: "Ok Bye, have a good day take care of your and your love ones.",
    },
    you: {
      name: "Ashish Mehra",
      img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149662.png",
    },
    duration: {
      day: "Mon",
      time: "10:15 AM",
    },
    lastmessage:
      "Ok Bye, have a good day take care of your and your love ones.",
  },
  {
    id: 29,
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgdJItHLmP9oZyEZWqXbXjvkjrceCCfZ6rZ37pF7VgyOzkhQQhpAxjAA1MBl-tIMBdrH8&usqp=CAU",
    name: "Vasudev Kutumbh",
    mode: "Online",
    message1: {
      sender: "Hey Ashish, How you doing?",
      you: "Well Good and health, I hope you are also doing well.",
    },
    message2: {
      sender: "Good, Are you going to come tomorrow for holi celebration ?",
      you: "OffCourse yes!!, I am attending holi tommorrow",
    },
    message3: {
      sender:
        "There is an  party in my house so I am inviting to you at my hourse",
      sender:
        "https://i.pinimg.com/originals/df/20/5c/df205c78053bf1bf5b0a9fbf1d9726a0.jpg",
      you: "Thanks for your invitation",
    },
    message4: {
      sender:
        "See you tommorrow, I had to visit some family member home to give invitation card",
      you: "Ok Bye, have a good day take care of your and your love ones.",
    },
    you: {
      name: "Ashish Mehra",
      img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149662.png",
    },
    duration: {
      day: "Mon",
      time: "10:15 AM",
    },
    lastmessage:
      "Ok Bye, have a good day take care of your and your love ones.",
  },
];

export default user;
