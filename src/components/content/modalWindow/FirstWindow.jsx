import React from "react";

const FirstWindow = ({ closeWindow }) => {
  return (
    <>
      <div className="content--div">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/Cx_zTHRcUJ0.png" />
        <h4>Игровой видео</h4>
      </div>
      <div className="content--div">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/JQCVtO0LVjk.png" />
        <h4>Игры</h4>
      </div>
      <div className="content--div">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/nbUcQfHcgBv.png" />
        <h4>Избранное</h4>
      </div>
      <div className="content--div">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/vG0kc45wHaG.png" />
        <h4>Кризисное реагирование</h4>
      </div>
      <div className="content--div">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/QILj4kKZMLW.png" />
        <h4>Мероприятия</h4>
      </div>
      <div className="content--div">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/cbPxeioybsd.png" />
        <h4>Недавние действия с рекламой</h4>
      </div>
      <div className="content--div">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/kD5Sv0isIPs.png" />
        <h4>Последние новости</h4>
      </div>
      <div className="content--div">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/VhoyAd0w8bZ.png" />
        <h4>прямой эфир</h4>
      </div>
      <div className="content--div">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/FMv4tTIpfwB.png" />
        <h4>Сборы пожертвований</h4>
      </div>
      <div className="content--div">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/KlDlsO3UxDM.png" />
        <h4>Сохраненное</h4>
      </div>
      <div className="content--div">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/0gH3vbvr8Ee.png" />
        <h4>Страницы</h4>
      </div>
      <div className="content--div">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/lqymE2iRETE.png" />
        <h4>центр реклама</h4>
      </div>
      <div className="content--div">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/8S1zU2zserN.png" />
        <h4>Цифровые коллекционные предметы</h4>
      </div>
      <div className="content--div">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/z2lQL_jKCWe.png" />
        <h4>Эмоциональное здоровье</h4>
      </div>
      <div className="content--div">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yM/r/C949oxkze-S.png" />
        <h4>Ads Manager</h4>
      </div>
      <div className="content--div">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/FZK_jEWapM0.png" />
        <h4>COVID-19: Центр информации</h4>
      </div>
      <div className="content--div">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yM/r/vWBUs7aYAiK.png" />
        <h4>Facebook Pay</h4>
      </div>
      <div className="content--div">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/ocBBGg-gRd5.png" />
        <h4>Messages</h4>
      </div>
      <div className="content--div background" onClick={closeWindow}>
        <img
          style={{ width: 34, height: 34 }}
          src="https://icons-for-free.com/iconfiles/png/128/expand+expand+less+expandless+top+up+icon-1320185733356205582.png"
        />
        <h4> Показать меньше</h4>
      </div>
    </>
  );
};

export default FirstWindow;
