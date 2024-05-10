from fastapi import FastAPI, Request, Form
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse, RedirectResponse
from fastapi.templating import Jinja2Templates

app = FastAPI(redirect_slashes=False)
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

@app.get("/", response_class=HTMLResponse)
async def render_login_page(request: Request):
    return templates.TemplateResponse("login.html", {"request": request})

@app.post("/login")
async def login(request: Request, username: str = Form(None), password: str = Form(None)):
    if username == "admin" and password == "1234":
        return RedirectResponse(url="/case_select")
    else:
        return templates.TemplateResponse("login.html", {"request": request, "login_failed": True})

@app.post("/case_select", response_class=HTMLResponse)
async def process_case_selection(request: Request):
    return templates.TemplateResponse("case_select.html", {"request": request})

@app.get("/new_case", response_class=HTMLResponse)
async def new_case(request: Request):
    return templates.TemplateResponse("new_case.html", {"request": request})

@app.post("/data_manage", response_class=HTMLResponse)
async def data_manage(request: Request):
    return templates.TemplateResponse("data_manage.html", {"request": request})

@app.get("/upload_case", response_class=HTMLResponse)
async def upload_case(request: Request):
    return templates.TemplateResponse("upload_case.html", {"request": request})

@app.get("/chatbot", response_class=HTMLResponse)
async def chatbot(request: Request, caseName: str):
    return templates.TemplateResponse("chatbot.html", {"request": request, "caseName": caseName})

@app.get("/chatbot_graph", response_class=HTMLResponse)
async def chatbot_graph(request: Request):
    return templates.TemplateResponse("chatbot_graph.html", {"request": request})

@app.get("/chat_history", response_class=HTMLResponse)
async def chat_history(request: Request):
    return templates.TemplateResponse("chatbot.html", {"request": request})