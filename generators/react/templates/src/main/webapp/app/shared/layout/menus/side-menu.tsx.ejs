import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Translate } from 'react-jhipster';
import { useLocation, Link } from 'react-router-dom';
import { IMenuItem, setMobileLayoutStatus } from 'app/shared/reducers/ui';
import { useAppDispatch, useAppSelector } from 'app/config/store';

const MenuItem: React.FC<{
  item: IMenuItem;
  index: number;
  level?: number;
}> = ({ item, index, level = 0 }) => {
  const mobileLayoutActivated = useAppSelector(state => state.ui.mobileLayoutActivated);
  const dispatch = useAppDispatch();
  const hideMobileLayout = () => {
    if (mobileLayoutActivated) {
      dispatch(setMobileLayoutStatus(!mobileLayoutActivated));
    }
  };

  const liMenuItem = useRef<HTMLLIElement>(null);
  const activeMenuitemClasName = 'active-menuitem';
  const handleToggle = () => {
    if (liMenuItem.current?.classList.contains(activeMenuitemClasName)) {
      liMenuItem.current?.classList.remove(activeMenuitemClasName);
    } else {
      liMenuItem.current?.classList.add(activeMenuitemClasName);
    }
  };
  const location = useLocation();

  const isPathIncluded = (path: string) => {
    // console.log(location.pathname);
    // console.log(path.substring(1));
    return location.pathname == path.replace('#', '');
  };

  useEffect(() => {
    let activeRoute = liMenuItem.current?.querySelectorAll('.active-route');
    if (activeRoute && activeRoute.length > 0) {
      // console.log(liMenuItem.current);
      liMenuItem.current?.classList.add(activeMenuitemClasName);
    }
  }, []); // 空 只执行一次

  return (
    <li ref={liMenuItem} key={index} className={`${level === 0 ? 'layout-root-menuitem' : ''}`}>
      {item.url ? (
        <>
          {level == 0 && <div className="layout-menuitem-root-text">{item.label}</div>}
          {item.url.startsWith('.') ? (
            <a href={item.url} target="_blank" className={`${isPathIncluded(item.url) ? 'active-route' : ''}`}>
              {item.icon && <i className={`layout-menuitem-icon ${item.icon}`}></i>}
              <span className="layout-menuitem-text">
                {item.labelKey ? <Translate contentKey={item.labelKey}>{item.label}</Translate> : item.label}
              </span>
            </a>
          ) : (
            <Link to={item.url} onClick={hideMobileLayout} className={`${isPathIncluded(item.url) ? 'active-route' : ''}`}>
              {item.icon && <i className={`layout-menuitem-icon ${item.icon}`}></i>}
              <span className="layout-menuitem-text">
                {item.labelKey ? <Translate contentKey={item.labelKey}>{item.label}</Translate> : item.label}
              </span>
            </Link>
          )}
        </>
      ) : (
        <>
          {level == 0 && (
            <div className="layout-menuitem-root-text">
              {item.labelKey ? <Translate contentKey={item.labelKey}>{item.label}</Translate> : item.label}
            </div>
          )}
          <a onClick={handleToggle}>
            {item.icon && <i className={`layout-menuitem-icon ${item.icon}`}></i>}
            <span className="layout-menuitem-text">
              {item.labelKey ? <Translate contentKey={item.labelKey}>{item.label}</Translate> : item.label}
            </span>
            {level > 0 && item.items != undefined && item.items.length > 0 && (
              <i className="pi pi-fw pi-angle-down layout-submenu-toggler"></i>
            )}
          </a>
          {item.items && (
            <ul className="layout-menu">
              {item.items.map(
                (item, itemsIndex) =>
                  (item.visable || item.visable == null) && <MenuItem key={itemsIndex} item={item} level={level + 1} index={itemsIndex} />,
              )}
            </ul>
          )}
        </>
      )}
    </li>
  );
};

const SideMenu: React.FC<{ model: IMenuItem[] }> = ({ model }) => {
  return (
    <ul className="layout-menu">
      {model.map((item, index) => (item.visable || item.visable == null) && <MenuItem key={index} item={item} index={index} />)}
    </ul>
  );
};

export default SideMenu;
