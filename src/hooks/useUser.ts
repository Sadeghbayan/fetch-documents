import useApi from "./useApi";
import { Ref, ref } from "vue";
import { userInfoUrl } from "../utils/config";

export type UsableUser = Promise<{
  userInfo: Ref<IUser | undefined>;
  error: Ref<any | undefined>;
  userFirstName: Ref<string | undefined>;
  userLastName: Ref<string | undefined>;
}>;

export default async function useUser(): UsableUser {
  const { response: userInfo, request, error } = useApi<IUser>(userInfoUrl);
  const userFirstName: Ref<string | undefined> = ref("");
  const userLastName: Ref<string | undefined> = ref("");
  const loaded = ref(false);

  if (loaded.value === false) {
    await request();
    const userInfoObject = userInfo.value;
    userFirstName.value = userInfoObject?.body.User.profile.firstName;
    userLastName.value = userInfoObject?.body.User.profile.lastName;
    loaded.value = true;
  }

  return {
    userFirstName,
    userLastName,
    userInfo,
    error,
  };
}
