import * as React from 'react';
import ROUTES from "src/router/professionalPageRouters";
import { BaseAppBar, HorizontalLayout, CustomMenu, MenuSlotProps,VerticalIconButton } from 'src/app/professional/assets/styles/components/appbarStyle'
import { MenuItem, IconButton, Button, Tooltip } from "src/components/mui/components";
import { MenuIcon } from 'src/components/mui/icons';
import { ColorScheme } from "src/theme/UIstandard"
import BackToTop from 'src/components/tools/BackToTop/BackToTop';

export default function ProfessionalAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorElNav);

  const handleScroll = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <BaseAppBar>
      {/* theme.breakpoints.down('md')) */}
      <HorizontalLayout>
        <BackToTop variant="text" textContent="JUI WEN, CHIANG" alwaysVisible={true} />
        <IconButton
          onClick={handleOpenNavMenu}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? 'menu-appbar' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}>
          <MenuIcon sx={{ color: ColorScheme.text.dark }} />
        </IconButton>
        <CustomMenu
          id="menu-appbar"
          anchorEl={anchorElNav}
          open={open}
          onClose={handleCloseNavMenu}
          slotProps={{
            paper: {
              elevation: 0,
              sx: (theme) => MenuSlotProps(theme),
            },
          }}
        >
          {ROUTES.map(({ path, name }) => (
            <MenuItem key={path} sx={{ justifyContent: 'flex-end' }} >
              <Button
                key={path}
                color="neutral"
                size="large"
                onClick={() => {
                  handleScroll(path);
                  handleCloseNavMenu();
                }}
                sx={{
                  whiteSpace: 'normal',
                  wordBreak: 'break-word',
                  textAlign: 'right',
                  lineHeight: 1.3,
                }}
              >
                {name}
              </Button>
            </MenuItem>
          ))}
        </CustomMenu>
      </HorizontalLayout>

      {/* theme.breakpoints.up('md')) */}
      {ROUTES.map(({ path, name, icon: Icon }) => (
        <Tooltip key={path} title={name} placement="right">
          <VerticalIconButton
            onClick={() => handleScroll(path)}
            // sx={{
            //   display: { xs: 'none', md: 'flex' },
            //   color: ColorScheme.primary.dark,
            // }}
          >
            <Icon />
          </VerticalIconButton>
        </Tooltip>
      ))}
    </BaseAppBar>
  )
}