import Text from "components/Text";
import UserList from "components/UserList";
import * as S from "./style";
import { useFavoritePicker } from "hooks";
import { useState } from "react";
import { Snackbar } from "@material-ui/core";

const Favorites = () => {
  const { addOrRemoveFavorite, isUserFavorite, favorites } = useFavoritePicker();
  const [removedUser, setRemovedUser] = useState();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const notifyFavoriteChange = (user) => {
    setRemovedUser(Object.values(user.name).join(" "));
    setOpenSnackbar(true);
    addOrRemoveFavorite(user);
  };

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            My Fav Ppl
          </Text>
        </S.Header>
        <UserList
          users={favorites}
          isLoading={false}
          addOrRemoveFavorite={notifyFavoriteChange}
          isUserFavorite={isUserFavorite}
        />
        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={() => {
            setOpenSnackbar(false);
          }}
          message={`Removed ${removedUser}`}
        />
      </S.Content>
    </S.Home>
  );
};

export default Favorites;
