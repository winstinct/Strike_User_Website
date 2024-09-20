import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RequiredStar from "../../../shared/RequiredStar/RequiredStar";
import { StepperContext } from "../../../contexts/StepperContextProvider";
import ShowErrorMsg from "../../../shared/ShowErrorMsg/ShowErrorMsg";
import { useDispatch, useSelector } from "react-redux";
import { addUserDetails } from "../../../redux/createUserSlice";
import { useSignupMutation } from "../../../redux/features/auth/authApi";
import { toast } from "react-toastify";
import { useAuth } from "../../../contexts/AuthContext";
import SubmitBtnLoader from "../../../components/SubmitBtnLoader";
import ReactSelect from "react-select";

const indianStatesOptions = [
  { label: "Andhra Pradesh", value: "Andhra Pradesh" },
  { label: "Arunachal Pradesh", value: "Arunachal Pradesh" },
  { label: "Assam", value: "Assam" },
  { label: "Bihar", value: "Bihar" },
  { label: "Chhattisgarh", value: "Chhattisgarh" },
  { label: "Goa", value: "Goa" },
  { label: "Gujarat", value: "Gujarat" },
  { label: "Haryana", value: "Haryana" },
  { label: "Himachal Pradesh", value: "Himachal Pradesh" },
  { label: "Jharkhand", value: "Jharkhand" },
  { label: "Karnataka", value: "Karnataka" },
  { label: "Kerala", value: "Kerala" },
  { label: "Madhya Pradesh", value: "Madhya Pradesh" },
  { label: "Maharashtra", value: "Maharashtra" },
  { label: "Manipur", value: "Manipur" },
  { label: "Meghalaya", value: "Meghalaya" },
  { label: "Mizoram", value: "Mizoram" },
  { label: "Nagaland", value: "Nagaland" },
  { label: "Odisha", value: "Odisha" },
  { label: "Punjab", value: "Punjab" },
  { label: "Rajasthan", value: "Rajasthan" },
  { label: "Sikkim", value: "Sikkim" },
  { label: "Tamil Nadu", value: "Tamil Nadu" },
  { label: "Telangana", value: "Telangana" },
  { label: "Tripura", value: "Tripura" },
  { label: "Uttar Pradesh", value: "Uttar Pradesh" },
  { label: "Uttarakhand", value: "Uttarakhand" },
  { label: "West Bengal", value: "West Bengal" },
];

const indianCitiesOptions = [
  { label: "Anantapur", value: "Anantapur" },
  { label: "Chittoor", value: "Chittoor" },
  { label: "East Godavari", value: "East Godavari" },
  { label: "Guntur", value: "Guntur" },
  { label: "Kadapa", value: "Kadapa" },
  { label: "Krishna", value: "Krishna" },
  { label: "Kurnool", value: "Kurnool" },
  { label: "Nellore", value: "Nellore" },
  { label: "Prakasam", value: "Prakasam" },
  { label: "Srikakulam", value: "Srikakulam" },
  { label: "Visakhapatnam", value: "Visakhapatnam" },
  { label: "Vizianagaram", value: "Vizianagaram" },
  { label: "West Godavari", value: "West Godavari" },
  { label: "Tawang", value: "Tawang" },
  { label: "West Kameng", value: "West Kameng" },
  { label: "East Kameng", value: "East Kameng" },
  { label: "Papum Pare", value: "Papum Pare" },
  { label: "Kurung Kumey", value: "Kurung Kumey" },
  { label: "Kra Daadi", value: "Kra Daadi" },
  { label: "Lower Subansiri", value: "Lower Subansiri" },
  { label: "Upper Subansiri", value: "Upper Subansiri" },
  { label: "West Siang", value: "West Siang" },
  { label: "East Siang", value: "East Siang" },
  { label: "Siang", value: "Siang" },
  { label: "Upper Siang", value: "Upper Siang" },
  { label: "Lower Siang", value: "Lower Siang" },
  { label: "Lower Dibang Valley", value: "Lower Dibang Valley" },
  { label: "Dibang Valley", value: "Dibang Valley" },
  { label: "Anjaw", value: "Anjaw" },
  { label: "Lohit", value: "Lohit" },
  { label: "Namsai", value: "Namsai" },
  { label: "Changlang", value: "Changlang" },
  { label: "Tirap", value: "Tirap" },
  { label: "Longding", value: "Longding" },
  { label: "Baksa", value: "Baksa" },
  { label: "Barpeta", value: "Barpeta" },
  { label: "Biswanath", value: "Biswanath" },
  { label: "Bongaigaon", value: "Bongaigaon" },
  { label: "Cachar", value: "Cachar" },
  { label: "Charaideo", value: "Charaideo" },
  { label: "Chirang", value: "Chirang" },
  { label: "Darrang", value: "Darrang" },
  { label: "Dhemaji", value: "Dhemaji" },
  { label: "Dhubri", value: "Dhubri" },
  { label: "Dibrugarh", value: "Dibrugarh" },
  { label: "Dima Hasao", value: "Dima Hasao" },
  { label: "Goalpara", value: "Goalpara" },
  { label: "Golaghat", value: "Golaghat" },
  { label: "Hailakandi", value: "Hailakandi" },
  { label: "Hojai", value: "Hojai" },
  { label: "Jorhat", value: "Jorhat" },
  { label: "Kamrup", value: "Kamrup" },
  { label: "Kamrup Metropolitan", value: "Kamrup Metropolitan" },
  { label: "Karbi Anglong", value: "Karbi Anglong" },
  { label: "Karimganj", value: "Karimganj" },
  { label: "Kokrajhar", value: "Kokrajhar" },
  { label: "Lakhimpur", value: "Lakhimpur" },
  { label: "Majuli", value: "Majuli" },
  { label: "Morigaon", value: "Morigaon" },
  { label: "Nagaon", value: "Nagaon" },
  { label: "Nalbari", value: "Nalbari" },
  { label: "Sivasagar", value: "Sivasagar" },
  { label: "Sonitpur", value: "Sonitpur" },
  { label: "South Salmara-Mankachar", value: "South Salmara-Mankachar" },
  { label: "Tinsukia", value: "Tinsukia" },
  { label: "Udalguri", value: "Udalguri" },
  { label: "West Karbi Anglong", value: "West Karbi Anglong" },
  { label: "Araria", value: "Araria" },
  { label: "Arwal", value: "Arwal" },
  { label: "Aurangabad", value: "Aurangabad" },
  { label: "Banka", value: "Banka" },
  { label: "Begusarai", value: "Begusarai" },
  { label: "Bhagalpur", value: "Bhagalpur" },
  { label: "Bhojpur", value: "Bhojpur" },
  { label: "Buxar", value: "Buxar" },
  { label: "Darbhanga", value: "Darbhanga" },
  { label: "East Champaran", value: "East Champaran" },
  { label: "Gaya", value: "Gaya" },
  { label: "Gopalganj", value: "Gopalganj" },
  { label: "Jamui", value: "Jamui" },
  { label: "Jehanabad", value: "Jehanabad" },
  { label: "Kaimur", value: "Kaimur" },
  { label: "Katihar", value: "Katihar" },
  { label: "Khagaria", value: "Khagaria" },
  { label: "Kishanganj", value: "Kishanganj" },
  { label: "Lakhisarai", value: "Lakhisarai" },
  { label: "Madhepura", value: "Madhepura" },
  { label: "Madhubani", value: "Madhubani" },
  { label: "Munger", value: "Munger" },
  { label: "Muzaffarpur", value: "Muzaffarpur" },
  { label: "Nalanda", value: "Nalanda" },
  { label: "Nawada", value: "Nawada" },
  { label: "Patna", value: "Patna" },
  { label: "Purnia", value: "Purnia" },
  { label: "Rohtas", value: "Rohtas" },
  { label: "Saharsa", value: "Saharsa" },
  { label: "Samastipur", value: "Samastipur" },
  { label: "Saran", value: "Saran" },
  { label: "Sheikhpura", value: "Sheikhpura" },
  { label: "Sheohar", value: "Sheohar" },
  { label: "Sitamarhi", value: "Sitamarhi" },
  { label: "Siwan", value: "Siwan" },
  { label: "Supaul", value: "Supaul" },
  { label: "Vaishali", value: "Vaishali" },
  { label: "West Champaran", value: "West Champaran" },
  { label: "Balod", value: "Balod" },
  { label: "Baloda Bazar", value: "Baloda Bazar" },
  { label: "Balrampur", value: "Balrampur" },
  { label: "Bastar", value: "Bastar" },
  { label: "Bemetara", value: "Bemetara" },
  { label: "Bijapur", value: "Bijapur" },
  { label: "Bilaspur", value: "Bilaspur" },
  { label: "Dantewada", value: "Dantewada" },
  { label: "Dhamtari", value: "Dhamtari" },
  { label: "Durg", value: "Durg" },
  { label: "Gariaband", value: "Gariaband" },
  { label: "Janjgir-Champa", value: "Janjgir-Champa" },
  { label: "Jashpur", value: "Jashpur" },
  { label: "Kabirdham", value: "Kabirdham" },
  { label: "Kanker", value: "Kanker" },
  { label: "Kondagaon", value: "Kondagaon" },
  { label: "Korba", value: "Korba" },
  { label: "Koriya", value: "Koriya" },
  { label: "Mahasamund", value: "Mahasamund" },
  { label: "Mungeli", value: "Mungeli" },
  { label: "Narayanpur", value: "Narayanpur" },
  { label: "Raigarh", value: "Raigarh" },
  { label: "Raipur", value: "Raipur" },
  { label: "Rajnandgaon", value: "Rajnandgaon" },
  { label: "Sukma", value: "Sukma" },
  { label: "Surajpur", value: "Surajpur" },
  { label: "Surguja", value: "Surguja" },
  { label: "North Goa", value: "North Goa" },
  { label: "South Goa", value: "South Goa" },
  { label: "Ahmedabad", value: "Ahmedabad" },
  { label: "Amreli", value: "Amreli" },
  { label: "Anand", value: "Anand" },
  { label: "Aravalli", value: "Aravalli" },
  { label: "Banaskantha", value: "Banaskantha" },
  { label: "Bharuch", value: "Bharuch" },
  { label: "Bhavnagar", value: "Bhavnagar" },
  { label: "Botad", value: "Botad" },
  { label: "Chhota Udaipur", value: "Chhota Udaipur" },
  { label: "Dahod", value: "Dahod" },
  { label: "Dang", value: "Dang" },
  { label: "Devbhoomi Dwarka", value: "Devbhoomi Dwarka" },
  { label: "Gandhinagar", value: "Gandhinagar" },
  { label: "Gir Somnath", value: "Gir Somnath" },
  { label: "Jamnagar", value: "Jamnagar" },
  { label: "Junagadh", value: "Junagadh" },
  { label: "Kheda", value: "Kheda" },
  { label: "Kutch", value: "Kutch" },
  { label: "Mahisagar", value: "Mahisagar" },
  { label: "Mehsana", value: "Mehsana" },
  { label: "Morbi", value: "Morbi" },
  { label: "Narmada", value: "Narmada" },
  { label: "Navsari", value: "Navsari" },
  { label: "Panchmahal", value: "Panchmahal" },
  { label: "Patan", value: "Patan" },
  { label: "Porbandar", value: "Porbandar" },
  { label: "Rajkot", value: "Rajkot" },
  { label: "Sabarkantha", value: "Sabarkantha" },
  { label: "Surat", value: "Surat" },
  { label: "Surendranagar", value: "Surendranagar" },
  { label: "Tapi", value: "Tapi" },
  { label: "Vadodara", value: "Vadodara" },
  { label: "Valsad", value: "Valsad" },
  { label: "Ambala", value: "Ambala" },
  { label: "Bhiwani", value: "Bhiwani" },
  { label: "Charkhi Dadri", value: "Charkhi Dadri" },
  { label: "Faridabad", value: "Faridabad" },
  { label: "Fatehabad", value: "Fatehabad" },
  { label: "Gurugram", value: "Gurugram" },
  { label: "Hisar", value: "Hisar" },
  { label: "Jhajjar", value: "Jhajjar" },
  { label: "Jind", value: "Jind" },
  { label: "Kaithal", value: "Kaithal" },
  { label: "Karnal", value: "Karnal" },
  { label: "Kurukshetra", value: "Kurukshetra" },
  { label: "Mahendragarh", value: "Mahendragarh" },
  { label: "Nuh", value: "Nuh" },
  { label: "Palwal", value: "Palwal" },
  { label: "Panchkula", value: "Panchkula" },
  { label: "Panipat", value: "Panipat" },
  { label: "Rewari", value: "Rewari" },
  { label: "Rohtak", value: "Rohtak" },
  { label: "Sirsa", value: "Sirsa" },
  { label: "Sonipat", value: "Sonipat" },
  { label: "Yamunanagar", value: "Yamunanagar" },
  { label: "Bilaspur", value: "Bilaspur" },
  { label: "Chamba", value: "Chamba" },
  { label: "Hamirpur", value: "Hamirpur" },
  { label: "Kangra", value: "Kangra" },
  { label: "Kinnaur", value: "Kinnaur" },
  { label: "Kullu", value: "Kullu" },
  { label: "Lahaul and Spiti", value: "Lahaul and Spiti" },
  { label: "Mandi", value: "Mandi" },
  { label: "Shimla", value: "Shimla" },
  { label: "Sirmaur", value: "Sirmaur" },
  { label: "Solan", value: "Solan" },
  { label: "Una", value: "Una" },
  { label: "Bokaro", value: "Bokaro" },
  { label: "Chatra", value: "Chatra" },
  { label: "Deoghar", value: "Deoghar" },
  { label: "Dhanbad", value: "Dhanbad" },
  { label: "Dumka", value: "Dumka" },
  { label: "East Singhbhum", value: "East Singhbhum" },
  { label: "Garhwa", value: "Garhwa" },
  { label: "Giridih", value: "Giridih" },
  { label: "Godda", value: "Godda" },
  { label: "Gumla", value: "Gumla" },
  { label: "Hazaribagh", value: "Hazaribagh" },
  { label: "Jamtara", value: "Jamtara" },
  { label: "Khunti", value: "Khunti" },
  { label: "Koderma", value: "Koderma" },
  { label: "Latehar", value: "Latehar" },
  { label: "Lohardaga", value: "Lohardaga" },
  { label: "Pakur", value: "Pakur" },
  { label: "Palamu", value: "Palamu" },
  { label: "Ramgarh", value: "Ramgarh" },
  { label: "Ranchi", value: "Ranchi" },
  { label: "Sahebganj", value: "Sahebganj" },
  { label: "Seraikela Kharsawan", value: "Seraikela Kharsawan" },
  { label: "Simdega", value: "Simdega" },
  { label: "West Singhbhum", value: "West Singhbhum" },
  { label: "Bagalkot", value: "Bagalkot" },
  { label: "Ballari", value: "Ballari" },
  { label: "Belagavi", value: "Belagavi" },
  { label: "Bengaluru Rural", value: "Bengaluru Rural" },
  { label: "Bengaluru Urban", value: "Bengaluru Urban" },
  { label: "Bidar", value: "Bidar" },
  { label: "Chamarajanagar", value: "Chamarajanagar" },
  { label: "Chikkaballapur", value: "Chikkaballapur" },
  { label: "Chikkamagaluru", value: "Chikkamagaluru" },
  { label: "Chitradurga", value: "Chitradurga" },
  { label: "Dakshina Kannada", value: "Dakshina Kannada" },
  { label: "Davanagere", value: "Davanagere" },
  { label: "Dharwad", value: "Dharwad" },
  { label: "Gadag", value: "Gadag" },
  { label: "Hassan", value: "Hassan" },
  { label: "Haveri", value: "Haveri" },
  { label: "Kodagu", value: "Kodagu" },
  { label: "Kolar", value: "Kolar" },
  { label: "Koppal", value: "Koppal" },
  { label: "Mandya", value: "Mandya" },
  { label: "Mysuru", value: "Mysuru" },
  { label: "Raichur", value: "Raichur" },
  { label: "Ramanagara", value: "Ramanagara" },
  { label: "Shivamogga", value: "Shivamogga" },
  { label: "Tumakuru", value: "Tumakuru" },
  { label: "Udupi", value: "Udupi" },
  { label: "Uttara Kannada", value: "Uttara Kannada" },
  { label: "Alappuzha", value: "Alappuzha" },
  { label: "Ernakulam", value: "Ernakulam" },
  { label: "Idukki", value: "Idukki" },
  { label: "Kollam", value: "Kollam" },
  { label: "Kottayam", value: "Kottayam" },
  { label: "Kozhikode", value: "Kozhikode" },
  { label: "Malappuram", value: "Malappuram" },
  { label: "Palakkad", value: "Palakkad" },
  { label: "Pathanamthitta", value: "Pathanamthitta" },
  { label: "Thiruvananthapuram", value: "Thiruvananthapuram" },
  { label: "Wayanad", value: "Wayanad" },
  { label: "Agra", value: "Agra" },
  { label: "Aligarh", value: "Aligarh" },
  { label: "Ambedkarnagar", value: "Ambedkarnagar" },
  { label: "Amroha", value: "Amroha" },
  { label: "Auraiya", value: "Auraiya" },
  { label: "Azamgarh", value: "Azamgarh" },
  { label: "Badaun", value: "Badaun" },
  { label: "Baghpat", value: "Baghpat" },
  { label: "Bahraich", value: "Bahraich" },
  { label: "Balrampur", value: "Balrampur" },
  { label: "Banda", value: "Banda" },
  { label: "Barabanki", value: "Barabanki" },
  { label: "Bareilly", value: "Bareilly" },
  { label: "Basti", value: "Basti" },
  { label: "Bhadohi", value: "Bhadohi" },
  { label: "Bijnor", value: "Bijnor" },
  { label: "Budaun", value: "Budaun" },
  { label: "Bulandshahr", value: "Bulandshahr" },
  { label: "Chandauli", value: "Chandauli" },
  { label: "Chitrakoot", value: "Chitrakoot" },
  { label: "Deoria", value: "Deoria" },
  { label: "Etah", value: "Etah" },
  { label: "Etawah", value: "Etawah" },
  { label: "Farrukhabad", value: "Farrukhabad" },
  { label: "Fatehpur", value: "Fatehpur" },
  { label: "Firozabad", value: "Firozabad" },
  { label: "Gautam Buddha Nagar", value: "Gautam Buddha Nagar" },
  { label: "Ghaziabad", value: "Ghaziabad" },
  { label: "Ghazipur", value: "Ghazipur" },
  { label: "Gonda", value: "Gonda" },
  { label: "Hamirpur", value: "Hamirpur" },
  { label: "Hardoi", value: "Hardoi" },
  { label: "Hathras", value: "Hathras" },
  { label: "Jalaun", value: "Jalaun" },
  { label: "Jaunpur", value: "Jaunpur" },
  { label: "Jhansi", value: "Jhansi" },
  { label: "Kannauj", value: "Kannauj" },
  { label: "Kanpur Dehat", value: "Kanpur Dehat" },
  { label: "Kanpur Nagar", value: "Kanpur Nagar" },
  { label: "Kaushambi", value: "Kaushambi" },
  { label: "Kushinagar", value: "Kushinagar" },
  { label: "Lakhimpur Kheri", value: "Lakhimpur Kheri" },
  { label: "Lalitpur", value: "Lalitpur" },
  { label: "Mahoba", value: "Mahoba" },
  { label: "Mainpuri", value: "Mainpuri" },
  { label: "Mathura", value: "Mathura" },
  { label: "Meerut", value: "Meerut" },
  { label: "Mirzapur", value: "Mirzapur" },
  { label: "Muzaffarnagar", value: "Muzaffarnagar" },
  { label: "Panchsheel Nagar", value: "Panchsheel Nagar" },
  { label: "Pilibhit", value: "Pilibhit" },
  { label: "Pratapgarh", value: "Pratapgarh" },
  { label: "Raebareli", value: "Raebareli" },
  { label: "Rampur", value: "Rampur" },
  { label: "Saharanpur", value: "Saharanpur" },
  { label: "Sambhal", value: "Sambhal" },
  { label: "Sant Ravidas Nagar", value: "Sant Ravidas Nagar" },
  { label: "Shahjahanpur", value: "Shahjahanpur" },
  { label: "Shamli", value: "Shamli" },
  { label: "Shravasti", value: "Shravasti" },
  { label: "Siddharth Nagar", value: "Siddharth Nagar" },
  { label: "Sitapur", value: "Sitapur" },
  { label: "Sonbhadra", value: "Sonbhadra" },
  { label: "Sultanpur", value: "Sultanpur" },
  { label: "Unnao", value: "Unnao" },
  { label: "Varanasi", value: "Varanasi" },
  { label: "Jammu", value: "Jammu" },
  { label: "Kathua", value: "Kathua" },
  { label: "Kishtwar", value: "Kishtwar" },
  { label: "Rajouri", value: "Rajouri" },
  { label: "Ramban", value: "Ramban" },
  { label: "Reasi", value: "Reasi" },
  { label: "Samba", value: "Samba" },
  { label: "Udhampur", value: "Udhampur" },
  { label: "Doda", value: "Doda" },
  { label: "Bandipora", value: "Bandipora" },
  { label: "Baramulla", value: "Baramulla" },
  { label: "Budgam", value: "Budgam" },
  { label: "Ganderbal", value: "Ganderbal" },
  { label: "Jammu", value: "Jammu" },
  { label: "Kathua", value: "Kathua" },
  { label: "Kishtwar", value: "Kishtwar" },
  { label: "Poonch", value: "Poonch" },
  { label: "Rajouri", value: "Rajouri" },
  { label: "Ramban", value: "Ramban" },
  { label: "Reasi", value: "Reasi" },
  { label: "Samba", value: "Samba" },
  { label: "Udhampur", value: "Udhampur" },
  { label: "Bishnupur", value: "Bishnupur" },
  { label: "Chandigarh", value: "Chandigarh" },
  { label: "Churachandpur", value: "Churachandpur" },
  { label: "Imphal East", value: "Imphal East" },
  { label: "Imphal West", value: "Imphal West" },
  { label: "Senapati", value: "Senapati" },
  { label: "Tamenglong", value: "Tamenglong" },
  { label: "Thoubal", value: "Thoubal" },
  { label: "Ukhrul", value: "Ukhrul" },
  { label: "Aizawl", value: "Aizawl" },
  { label: "Champhai", value: "Champhai" },
  { label: "Lunglei", value: "Lunglei" },
  { label: "Mamit", value: "Mamit" },
  { label: "Saiha", value: "Saiha" },
  { label: "Serchhip", value: "Serchhip" },
  { label: "Dimapur", value: "Dimapur" },
  { label: "Kiphire", value: "Kiphire" },
  { label: "Longleng", value: "Longleng" },
  { label: "Mokokchung", value: "Mokokchung" },
  { label: "Mon", value: "Mon" },
  { label: "Peren", value: "Peren" },
  { label: "Phek", value: "Phek" },
  { label: "Tuensang", value: "Tuensang" },
  { label: "Wokha", value: "Wokha" },
  { label: "Zunheboto", value: "Zunheboto" },
  { label: "Bhopal", value: "Bhopal" },
  { label: "Burhanpur", value: "Burhanpur" },
  { label: "Chhindwara", value: "Chhindwara" },
  { label: "Dewas", value: "Dewas" },
  { label: "Dhar", value: "Dhar" },
  { label: "Guna", value: "Guna" },
  { label: "Gwalior", value: "Gwalior" },
  { label: "Harda", value: "Harda" },
  { label: "Hoshangabad", value: "Hoshangabad" },
  { label: "Indore", value: "Indore" },
  { label: "Jabalpur", value: "Jabalpur" },
  { label: "Katni", value: "Katni" },
  { label: "Khargone", value: "Khargone" },
  { label: "Mandla", value: "Mandla" },
  { label: "Mandsaur", value: "Mandsaur" },
  { label: "Morena", value: "Morena" },
  { label: "Nagda", value: "Nagda" },
  { label: "Narmadapuram", value: "Narmadapuram" },
  { label: "Neemuch", value: "Neemuch" },
  { label: "Panna", value: "Panna" },
  { label: "Raisen", value: "Raisen" },
  { label: "Rajgarh", value: "Rajgarh" },
  { label: "Ratlam", value: "Ratlam" },
  { label: "Sagar", value: "Sagar" },
  { label: "Satna", value: "Satna" },
  { label: "Sehore", value: "Sehore" },
  { label: "Shahdol", value: "Shahdol" },
  { label: "Shajapur", value: "Shajapur" },
  { label: "Sidhi", value: "Sidhi" },
  { label: "Singrauli", value: "Singrauli" },
  { label: "Tikamgarh", value: "Tikamgarh" },
  { label: "Ujjain", value: "Ujjain" },
  { label: "Umaria", value: "Umaria" },
  { label: "Vidhisha", value: "Vidhisha" },
  { label: "Ahmednagar", value: "Ahmednagar" },
  { label: "Akola", value: "Akola" },
  { label: "Amravati", value: "Amravati" },
  { label: "Aurangabad", value: "Aurangabad" },
  { label: "Beed", value: "Beed" },
  { label: "Bhandara", value: "Bhandara" },
  { label: "Buldhana", value: "Buldhana" },
  { label: "Chandrapur", value: "Chandrapur" },
  { label: "Dhule", value: "Dhule" },
  { label: "Gadchiroli", value: "Gadchiroli" },
  { label: "Gondia", value: "Gondia" },
  { label: "Hingoli", value: "Hingoli" },
  { label: "Jalna", value: "Jalna" },
  { label: "Jalna", value: "Jalna" },
  { label: "Kolhapur", value: "Kolhapur" },
  { label: "Latur", value: "Latur" },
  { label: "Nagpur", value: "Nagpur" },
  { label: "Nanded", value: "Nanded" },
  { label: "Nasik", value: "Nasik" },
  { label: "Osmanabad", value: "Osmanabad" },
  { label: "Parbhani", value: "Parbhani" },
  { label: "Pune", value: "Pune" },
  { label: "Raigad", value: "Raigad" },
  { label: "Ratnagiri", value: "Ratnagiri" },
  { label: "Sindhudurg", value: "Sindhudurg" },
  { label: "Solapur", value: "Solapur" },
  { label: "Thane", value: "Thane" },
  { label: "Wardha", value: "Wardha" },
  { label: "Washim", value: "Washim" },
  { label: "Yavatmal", value: "Yavatmal" },
  { label: "Bishnupur", value: "Bishnupur" },
  { label: "Imphal East", value: "Imphal East" },
  { label: "Imphal West", value: "Imphal West" },
  { label: "Senapati", value: "Senapati" },
  { label: "Tamenglong", value: "Tamenglong" },
  { label: "Thoubal", value: "Thoubal" },
  { label: "Ukhrul", value: "Ukhrul" },
  { label: "Aizawl", value: "Aizawl" },
  { label: "Champhai", value: "Champhai" },
  { label: "Lunglei", value: "Lunglei" },
  { label: "Mamit", value: "Mamit" },
  { label: "Saiha", value: "Saiha" },
  { label: "Serchhip", value: "Serchhip" },
  { label: "Dimapur", value: "Dimapur" },
  { label: "Kiphire", value: "Kiphire" },
  { label: "Longleng", value: "Longleng" },
  { label: "Mokokchung", value: "Mokokchung" },
  { label: "Mon", value: "Mon" },
  { label: "Peren", value: "Peren" },
  { label: "Phek", value: "Phek" },
  { label: "Tuensang", value: "Tuensang" },
  { label: "Wokha", value: "Wokha" },
  { label: "Zunheboto", value: "Zunheboto" },
];

const countriesOptions = [
  { label: "India", value: "India" },
  { label: "United States", value: "United States" },
  { label: "China", value: "China" },
  { label: "Japan", value: "Japan" },
  { label: "Germany", value: "Germany" },
  { label: "United Kingdom", value: "United Kingdom" },
  { label: "France", value: "France" },
  { label: "Brazil", value: "Brazil" },
  { label: "Canada", value: "Canada" },
  { label: "Australia", value: "Australia" },
];

const customStyles = {
  container: (provided) => ({
    ...provided,
    width: "100%",
  }),
  control: (provided) => ({
    ...provided,
    border: "1px solid #e7e4e4",
    boxShadow: "none",
    "&:hover": {
      border: "1px solid #e7e4e4",
    },
    padding: "2px 0",
    borderRadius: "5px",
    cursor: "pointer",
  }),
  menu: (provided) => ({
    ...provided,
    width: "100%",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#5500C3" : provided.backgroundColor,
    color: state.isSelected ? "#fff" : provided.color,
    "&:hover": {
      backgroundColor: state.isSelected ? "#5500C3" : provided.backgroundColor,
    },
    cursor: "pointer",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#333",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#000", // Change this to the color you want for the arrow
    "&:hover": {
      color: "#000", // Optional: change color on hover if desired
    },
  }),
};

export default function LocationDetails() {
  const { currentStep, setCurrentStep, steps } = useContext(StepperContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { login } = useAuth();
  const {
    location,
    Email,
    Password,
    FirstName,
    LastName,
    gender,
    dob,
    MobileNumber,
    imageUrl,
    countryCode,
    refferalCodes,
  } = useSelector((state) => state.createUser);
  const { country, state, city, address, pinCode } = location;

  const [showError, setShowError] = useState(false);

  // RTK Query Hooks
  const [signup, { isLoading }] = useSignupMutation();

  const handleSubmit = async () => {
    if (!country || !state || !city || !pinCode || !address) {
      return setShowError(true);
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }

    const userInfo = {
      location: {
        country: country.value,
        state: state.value,
        city: city.value,
      },
      Email,
      Password,
      FirstName,
      LastName,
      gender,
      dob,
      MobileNumber: countryCode + MobileNumber,
      imageUrl,
      refferalCodes,
    };

    // Call API
    try {
      const res = await signup(userInfo);
      // console.log("Signup User Response ===> ", res);
      if (res?.error) {
        return toast.error(res?.error?.data?.message);
      } else {
        await login(Email, Password);
        toast.success("Created user successfully.");
      }
    } catch (error) {
      return toast.error("There was something wrong.");
    }
    // Reset the form fields
    dispatch(
      addUserDetails({
        Email: "",
        Password: "",
        confirmPassword: "",
        FirstName: "",
        LastName: "",
        gender: "",
        dob: "",
        location: {
          country: "",
          state: "",
          city: "",
          address: "",
          pinCode: "",
        },
        MobileNumber: "",
        imageUrl: "",
        otp: "",
        otpRefId: "",
        countryCode: "",
        selectedCountryIndex: 101,
        selectedFile: "",
        refferalCodes: "",
      })
    );
    navigate("/");
  };

  useEffect(() => {
    setCurrentStep(2);
  }, []);
  return (
    <div>
      <div>
        <div className="flex items-center gap-5 mb-[1rem]">
          <div onClick={() => navigate(-1)} className="backBtn">
            <Icon className="text-[2rem]" icon="lets-icons:arrow-left-long" />
          </div>
          <h3 className="md:text-[2rem] text-[1.5rem] font-semibold">
            Location Details
          </h3>
        </div>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 xl:gap-[1.5rem] gap-[1rem]">
        <div className="w-full">
          <p className="font-medium">
            Country
            <RequiredStar />
          </p>
          {/* <Select
            className="border-[1px] border-gray-300 rounded-md"
            placeholder="Country"
            value={country}
            onChange={(value) =>
              dispatch(
                addUserDetails({ location: { ...location, country: value } })
              )
            }
          >
            {
              Country.getAllCountries().map(country => (<Option key={country.name} value={country.name}>{country.name}</Option>))
            }
          </Select> */}
          <ReactSelect
            onChange={(data) =>
              dispatch(
                addUserDetails({ location: { ...location, country: data } })
              )
            }
            options={countriesOptions}
            styles={customStyles}
            value={country}
          ></ReactSelect>

          {showError && !country && (
            <ShowErrorMsg message="This field is required" />
          )}
        </div>
        <div className="w-full">
          <p className="font-medium">
            State
            <RequiredStar />
          </p>
          {/* <Select
            className="border-[1px] border-gray-300 rounded-md"
            placeholder="gg"
            value={state}
            onChange={(value) =>
              dispatch(
                addUserDetails({ location: { ...location, state: value } })
              )
            }
          >
            {indianStatesArray.map((state) => (
              <Option key={state} value={state}>
                {state}
              </Option>
            ))}
          </Select> */}

          <ReactSelect
            onChange={(data) =>
              dispatch(
                addUserDetails({ location: { ...location, state: data } })
              )
            }
            options={indianStatesOptions}
            styles={customStyles}
            value={state}
          ></ReactSelect>
          {showError && !state && (
            <ShowErrorMsg message="This field is required" />
          )}
        </div>
        <div className="w-full">
          <p className="font-medium">
            City
            <RequiredStar />
          </p>
          {/* <Select
            className="border-[1px] border-gray-300 rounded-md"
            placeholder="gg"
            value={city}
            onChange={(value) =>
              dispatch(
                addUserDetails({ location: { ...location, city: value } })
              )
            }
          >
            {indianCitiesArray.map((city) => (
              <Option key={city} value={city}>
                {city}
              </Option>
            ))}
          </Select> */}
          <ReactSelect
            onChange={(data) =>
              dispatch(
                addUserDetails({ location: { ...location, city: data } })
              )
            }
            options={indianCitiesOptions}
            styles={customStyles}
            value={city}
          ></ReactSelect>
          {showError && !city && (
            <ShowErrorMsg message="This field is required" />
          )}
        </div>
        <div>
          <label className="block" htmlFor="pincode">
            Pincode
            <RequiredStar />
          </label>
          <input
            className="border-[1px] border-gray-300 px-[1rem] py-[0.4rem] rounded-[6px] outline-none w-full"
            type="number"
            id="pincode"
            value={pinCode}
            onChange={(e) =>
              dispatch(
                addUserDetails({
                  location: { ...location, pinCode: e.target.value },
                })
              )
            }
          />
          {showError && !pinCode && (
            <ShowErrorMsg message="This field is required" />
          )}
        </div>
        <div className="md:col-span-2">
          <label className="block" htmlFor="address">
            Address
            <RequiredStar />
          </label>
          <textarea
            className="outline-none border-[1px] border-gray-300 px-3 py-1 rounded-lg w-full"
            name="address"
            id="address"
            value={address}
            onChange={(e) =>
              dispatch(
                addUserDetails({
                  location: { ...location, address: e.target.value },
                })
              )
            }
          ></textarea>
          {showError && !address && (
            <ShowErrorMsg message="This field is required" />
          )}
        </div>
      </div>
      <div className="flex md:h-[70px] relative md:mt-0 mt-[4rem]">
        {isLoading ? (
          <div className="md:w-[300px] w-full absolute bottom-0 right-0">
            <SubmitBtnLoader />
          </div>
        ) : (
          <button
            className="submitBtn md:w-[300px] w-full absolute bottom-0 right-0"
            onClick={handleSubmit}
          >
            Submit Now
          </button>
        )}
      </div>
    </div>
  );
}
