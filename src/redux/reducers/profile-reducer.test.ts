import profileReducer, {ProfileType, setProfile, setProfileStatus} from "./profile-reducer";

let profile: ProfileType

let initialState: ProfileType = {
    userId: null,
    fullName: null,
    userImg: null,
    aboutMe: null,
    status: "",
    lookingForAJob: false,
    lookingForAJobDescription: "",
    contacts: {
        facebook: "",
        website: "",
        vk: "",
        twitter: "",
        instagram: "",
        youtube: "",
        github: "",
        mainLink: "",
    }
}

beforeAll(() => {
    profile = {
        userId: 12,
        fullName: "Andrey",
        userImg: "Rebrov",
        aboutMe: "aboutMe",
        status: "status",
        lookingForAJob: false,
        lookingForAJobDescription: "",
        contacts: {
            facebook: "",
            website: "",
            vk: "",
            twitter: "",
            instagram: "",
            youtube: "",
            github: "",
            mainLink: "",
        }
    }
})

describe("profileReducer", () =>{


    it("set profile", () =>{
        const result = profileReducer(initialState, setProfile(profile))
        expect(result).toEqual(profile)
    })

    it("set profile status", () =>{
        const result = profileReducer(initialState, setProfileStatus("newStatus"))
        expect(result.status).toEqual("newStatus")
    })
})