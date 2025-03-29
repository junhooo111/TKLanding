import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./style.module.scss";
import { AHU } from "./AHU";
import { FCU } from "./FCU";
import { AV } from "./AV";

export function AirConditioner() {
  const navigate = useNavigate();
  const { subMenu } = useParams(); // 현재 URL에서 서브메뉴 가져오기

  const subMenuList = [
    { name: "AHU(Air Handling Unit)", path: "AHU", component: AHU },
    { name: "FCU(Fan Coil Unit)", path: "FCU", component: FCU },
    { name: "AV(Air Volume) 공조기", path: "AV", component: AV },
  ];

  // ✅ 현재 URL에 설정된 메뉴를 찾고, 없으면 기본값(첫 번째 메뉴) 설정
  const initialMenu = subMenuList.find((menu) => menu.path === subMenu)?.path || subMenuList[0].path;
  const [selectedMenu, setSelectedMenu] = useState(initialMenu);

  useEffect(() => {
    if (subMenu) {
      setSelectedMenu(subMenu);
    }
  }, [subMenu]);

  // ✅ 메뉴 클릭 시 URL 변경
  const handleMenuClick = (menuPath: string) => {
    navigate(`/air-conditioner/${menuPath}`);
    setSelectedMenu(menuPath);
  };

  // ✅ 현재 선택된 메뉴에 맞는 컴포넌트 찾기
  const SelectedComponent = subMenuList.find((menu) => menu.path === selectedMenu)?.component || null;

  return (
    <div className={styles.component}>
      <div className={styles.subMenu}>
        {subMenuList.map(({ name, path }, index) => {
          const formattedMenu = name.replace(/\((.*?)\)/g, (_, match) => `<span class="${styles.highlight}">(${match})</span>`);

          return (
            <button
              key={index}
              className={selectedMenu === path ? styles.activeMenu : ""}
              onClick={() => handleMenuClick(path)}
              dangerouslySetInnerHTML={{ __html: formattedMenu }}
            />
          );
        })}
      </div>
      <div className={styles.routeWrapper}>
        <p>{`HOME`}</p>
        <p>{`>`}</p>
        <p>{`공기조화기`}</p>
        <p>{`>`}</p>
        <p className={styles.bold}>{selectedMenu}</p>
      </div>

      {/* ✅ 현재 선택된 메뉴의 컴포넌트 렌더링 */}
      {SelectedComponent && <SelectedComponent />}
    </div>
  );
}
